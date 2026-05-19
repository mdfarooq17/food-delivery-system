const express = require('express');
const mongoose = require('mongoose');
const SubscriptionPlan = require('../models/SubscriptionPlan');
const SubscriptionMenu = require('../models/SubscriptionMenu');
const ExtraItem = require('../models/ExtraItem');
const SubscriptionOrder = require('../models/SubscriptionOrder');
const DeliverySchedule = require('../models/DeliverySchedule');
const RiderAssignment = require('../models/RiderAssignment');
const Restaurant = require('../models/Restaurant');
const User = require('../models/User');
const Notification = require('../models/Notification');
const RiderProfile = require('../models/RiderProfile');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Helper to emit socket events
const emitSocketEvent = (req, room, event, data) => {
  const io = req.app.get('io');
  if (io && typeof io.to === 'function') {
    io.to(room).emit(event, data);
  }
};

// ==========================================
// 1. CUSTOMER PORTAL ENDPOINTS
// ==========================================

// GET /api/subscription/restaurants - List restaurants offering subscription meal services in customer's city
router.get('/restaurants', authMiddleware, async (req, res) => {
  try {
    const { city, planType, mealType, tag, search, page = 1, limit = 20 } = req.query;
    const userCity = city || req.user.city;

    // Find all active subscription plans matching filters
    const planQuery = { isActive: true };
    if (planType) planQuery.planType = planType;
    if (mealType) planQuery.mealType = mealType;
    if (tag) planQuery.tags = tag;

    const plans = await SubscriptionPlan.find(planQuery).lean();
    const restaurantIds = [...new Set(plans.map(p => p.restaurantId.toString()))];

    // Filter restaurants by city and search query
    const restQuery = { _id: { $in: restaurantIds }, isActive: true };
    if (userCity) {
      restQuery.city = { $regex: new RegExp(`^${userCity}$`, 'i') };
    }
    if (search) {
      restQuery.name = { $regex: search, $options: 'i' };
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const restaurants = await Restaurant.find(restQuery)
      .skip(skip)
      .limit(parseInt(limit))
      .lean();

    // Attach available plans & starting price to each restaurant
    for (let r of restaurants) {
      const restPlans = plans.filter(p => p.restaurantId.toString() === r._id.toString());
      r.subscriptionPlans = restPlans;
      r.startingPrice = restPlans.length > 0 ? Math.min(...restPlans.map(p => p.discountedPrice || p.totalPrice)) : 0;
      r.subscriptionTypes = [...new Set(restPlans.map(p => p.planType))];
      r.mealTypesAvailable = [...new Set(restPlans.map(p => p.mealType))];
      r.tags = [...new Set(restPlans.flatMap(p => p.tags || []))];
    }

    res.json({
      restaurants,
      currentPage: parseInt(page),
      totalPages: Math.ceil(restaurants.length / parseInt(limit)) || 1
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/subscription/restaurant/:id - Get restaurant details along with active plans, menus, and extras
router.get('/restaurant/:id', authMiddleware, async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id).lean();
    if (!restaurant) return res.status(404).json({ error: 'Restaurant not found' });

    const plans = await SubscriptionPlan.find({ restaurantId: restaurant._id, isActive: true }).lean();
    const extras = await ExtraItem.find({ restaurantId: restaurant._id, isAvailable: true }).lean();
    
    // Attach menus for each plan
    for (let plan of plans) {
      plan.menus = await SubscriptionMenu.find({ planId: plan._id }).sort({ dayNumber: 1 }).lean();
    }

    res.json({ restaurant, plans, extras });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/subscription/subscribe - Customer places a subscription request
router.get('/plans/:restaurantId', authMiddleware, async (req, res) => {
  try {
    const plans = await SubscriptionPlan.find({ restaurantId: req.params.restaurantId, isActive: true }).lean();
    res.json(plans);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

router.get('/menu/:planId', authMiddleware, async (req, res) => {
  try {
    const menus = await SubscriptionMenu.find({ planId: req.params.planId }).sort({ dayNumber: 1 }).lean();
    res.json(menus);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

router.get('/extras/:restaurantId', authMiddleware, async (req, res) => {
  try {
    const extras = await ExtraItem.find({ restaurantId: req.params.restaurantId, isAvailable: true }).lean();
    res.json(extras);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

router.post('/subscribe', authMiddleware, async (req, res) => {
  try {
    const { restaurantId, planId, startDate, endDate, preferredMealTimings, deliveryAddress, city, phone, deliveryInstructions, extras, totalAmount, notes } = req.body;
    
    const plan = await SubscriptionPlan.findById(planId);
    if (!plan) return res.status(404).json({ error: 'Subscription plan not found' });

    if (plan.currentSubscribers >= plan.maxSubscribers) {
      return res.status(400).json({ error: 'This subscription plan has reached its maximum subscriber limit.' });
    }

    const order = new SubscriptionOrder({
      customerId: req.user.id,
      restaurantId,
      planId,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      preferredMealTimings,
      deliveryAddress,
      city: city || req.user.city,
      phone,
      deliveryInstructions,
      extras: extras || [],
      totalAmount,
      notes,
      status: 'pending' // NOT auto approved. Restaurant must approve first.
    });

    await order.save();

    // Notify Restaurant via Socket & Notification
    emitSocketEvent(req, `restaurant_${restaurantId}`, 'subscription_request', { order });
    await Notification.create({
      userId: restaurantId, // Restaurant owner userId
      title: 'New Meal Subscription Request',
      message: `Customer ${req.user.name || req.user.email} has requested a ${plan.planType} subscription for ${plan.title}.`,
      type: 'order'
    });

    res.status(201).json({ message: 'Subscription request submitted successfully. Awaiting restaurant approval.', order });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/subscription/customer/my-subscriptions - View customer's active/pending/paused subscriptions
router.get('/customer/my-subscriptions', authMiddleware, async (req, res) => {
  try {
    const subscriptions = await SubscriptionOrder.find({ customerId: req.user.id })
      .populate('restaurantId', 'name image address phone city')
      .populate('planId', 'title description planType mealType totalPrice discountedPrice numberOfMeals deliveryTimings')
      .sort({ createdAt: -1 })
      .lean();

    res.json(subscriptions);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// PUT /api/subscription/customer/subscription/:id/action - Pause, resume, cancel, change time, mark vacation
router.put('/customer/subscription/:id/action', authMiddleware, async (req, res) => {
  try {
    const { action, vacationDates, newTiming, newAddress, note, modificationDate } = req.body;
    const order = await SubscriptionOrder.findOne({ _id: req.params.id, customerId: req.user.id });
    if (!order) return res.status(404).json({ error: 'Subscription not found' });

    let message = '';
    if (action === 'pause') {
      order.status = 'paused';
      message = 'Subscription paused successfully.';
    } else if (action === 'resume') {
      order.status = 'active';
      message = 'Subscription resumed successfully.';
    } else if (action === 'cancel') {
      order.status = 'cancelled';
      message = 'Subscription cancelled successfully.';
      // Decrement plan subscribers count
      await SubscriptionPlan.findByIdAndUpdate(order.planId, { $inc: { currentSubscribers: -1 } });
    } else if (action === 'vacation') {
      if (vacationDates && Array.isArray(vacationDates)) {
        order.vacationDates = [...new Set([...order.vacationDates, ...vacationDates])];
        message = 'Vacation dates updated successfully.';
        // Update matching DeliverySchedule items to 'skipped-vacation'
        await DeliverySchedule.updateMany({
          subscriptionOrderId: order._id,
          deliveryDate: { $in: vacationDates },
          status: { $in: ['preparing', 'ready'] }
        }, { status: 'skipped-vacation', notes: 'Customer on vacation mode' });
      }
    } else if (action === 'modify_schedule') {
      order.scheduleModifications.push({
        date: modificationDate,
        newTiming: newTiming || order.preferredMealTimings,
        newAddress: newAddress || order.deliveryAddress,
        note: note || '',
        isAcknowledged: false,
        requestedAt: new Date()
      });
      message = 'Schedule modification requested successfully. Restaurant has been notified.';
    }

    order.updatedAt = new Date();
    await order.save();

    // Notify Restaurant
    emitSocketEvent(req, `restaurant_${order.restaurantId}`, 'schedule_changed', { order, action, message });
    await Notification.create({
      userId: order.restaurantId,
      title: `Subscription Update: ${action.toUpperCase()}`,
      message: `Customer subscription (${order._id}) has been updated: ${message}`,
      type: 'system'
    });

    res.json({ message, order });
  } catch (err) { res.status(500).json({ error: err.message }); }
});


// ==========================================
// 2. RESTAURANT PORTAL ENDPOINTS
// ==========================================

// GET /api/subscription/restaurant/plans - Get all plans for logged in restaurant
router.get('/restaurant/plans', authMiddleware, async (req, res) => {
  try {
    console.log('[SUB-API] GET /restaurant/plans - User ID:', req.user.id, 'Role:', req.user.role);
    const restaurant = await Restaurant.findOne({ userId: req.user.id });
    console.log('[SUB-API] Restaurant found:', restaurant ? restaurant._id : 'NOT FOUND', restaurant ? restaurant.name : '');
    if (!restaurant) return res.status(404).json({ error: 'Restaurant profile not found for current user' });

    const plans = await SubscriptionPlan.find({ restaurantId: restaurant._id }).sort({ createdAt: -1 }).lean();
    console.log('[SUB-API] Plans found:', plans.length);
    for (let plan of plans) {
      plan.menus = await SubscriptionMenu.find({ planId: plan._id }).sort({ dayNumber: 1 }).lean();
    }
    res.json(plans);
  } catch (err) { 
    console.error('[SUB-API] Error in /restaurant/plans:', err.message);
    res.status(500).json({ error: err.message }); 
  }
});

// POST /api/subscription/restaurant/plan - Create new plan
router.post('/restaurant/plan', authMiddleware, async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({ userId: req.user.id });
    if (!restaurant) return res.status(404).json({ error: 'Restaurant profile not found' });

    const { title, description, planType, mealType, totalPrice, discountedPrice, numberOfMeals, deliveryTimings, deliveryZones, tags, maxSubscribers, includedServices } = req.body;
    const plan = new SubscriptionPlan({
      restaurantId: restaurant._id,
      title,
      description,
      planType,
      mealType,
      totalPrice,
      discountedPrice,
      numberOfMeals,
      deliveryTimings,
      deliveryZones: deliveryZones || [restaurant.city],
      tags: tags || [],
      maxSubscribers: maxSubscribers || 50,
      includedServices: includedServices || []
    });

    await plan.save();
    res.status(201).json({ message: 'Subscription plan created successfully', plan });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// PUT /api/subscription/restaurant/plan/:id - Update or toggle plan
router.put('/restaurant/plan/:id', authMiddleware, async (req, res) => {
  try {
    const plan = await SubscriptionPlan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: 'Plan updated successfully', plan });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// POST /api/subscription/restaurant/menu - Create or update menu items (supports batch / drag-and-drop save)
router.post('/restaurant/menu', authMiddleware, async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({ userId: req.user.id });
    if (!restaurant) return res.status(404).json({ error: 'Restaurant profile not found' });

    const { planId, menus } = req.body; // menus is array of menu objects
    if (!Array.isArray(menus)) return res.status(400).json({ error: 'Menus must be an array' });

    // Remove existing menu for this plan to replace with new builder structure
    await SubscriptionMenu.deleteMany({ planId });

    const menuItems = menus.map(m => ({
      restaurantId: restaurant._id,
      planId,
      dayNumber: m.dayNumber,
      dayName: m.dayName || `Day ${m.dayNumber}`,
      mealTiming: m.mealTiming || 'lunch',
      name: m.name,
      description: m.description,
      image: m.image,
      calories: m.calories,
      ingredients: m.ingredients || [],
      quantity: m.quantity || '1 portion',
      allergens: m.allergens || [],
      customNotes: m.customNotes,
      servingTime: m.servingTime || '',
      portionSize: m.portionSize || '',
      isVegetarian: m.isVegetarian || false,
      spiceLevel: m.spiceLevel || ''
    }));

    await SubscriptionMenu.insertMany(menuItems);
    res.json({ message: 'Subscription menu updated successfully', count: menuItems.length });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// POST /api/subscription/restaurant/extra - Create extra add-on
router.post('/restaurant/extra', authMiddleware, async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({ userId: req.user.id });
    if (!restaurant) return res.status(404).json({ error: 'Restaurant profile not found' });

    const extra = new ExtraItem({ restaurantId: restaurant._id, ...req.body });
    await extra.save();
    res.status(201).json({ message: 'Extra add-on created successfully', extra });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// GET /api/subscription/restaurant/requests - View pending subscription requests
router.get('/restaurant/requests', authMiddleware, async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({ userId: req.user.id });
    if (!restaurant) return res.status(404).json({ error: 'Restaurant profile not found' });

    const requests = await SubscriptionOrder.find({ restaurantId: restaurant._id, status: 'pending' })
      .populate('customerId', 'name email phone city profileImage')
      .populate('planId', 'title planType mealType totalPrice discountedPrice deliveryTimings')
      .sort({ createdAt: -1 })
      .lean();

    res.json(requests);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// PUT /api/subscription/restaurant/request/:id/status - Approve/reject request & generate Daily Delivery Schedules!
router.put('/restaurant/request/:id/status', authMiddleware, async (req, res) => {
  try {
    const { status, rejectReason } = req.body;
    const order = await SubscriptionOrder.findById(req.params.id).populate('planId');
    if (!order) return res.status(404).json({ error: 'Subscription request not found' });

    order.status = status; // 'approved' / 'active' / 'rejected'
    if (status === 'approved' || status === 'active') {
      order.status = 'active';
      // Increment subscriber count
      await SubscriptionPlan.findByIdAndUpdate(order.planId._id, { $inc: { currentSubscribers: 1 } });

      // =========================================================================
      // CRON / SCHEDULE GENERATOR: Generate Daily DeliverySchedule records for the plan duration
      // =========================================================================
      const menus = await SubscriptionMenu.find({ planId: order.planId._id }).sort({ dayNumber: 1 }).lean();
      const start = new Date(order.startDate);
      const end = new Date(order.endDate);
      const schedules = [];

      let current = new Date(start);
      let dayIdx = 0;

      while (current <= end) {
        const dateStr = current.toISOString().split('T')[0];
        // Check if date is in vacationDates
        const isVacation = order.vacationDates.includes(dateStr);
        
        // Pick matching menu item for the day (round-robin if menu days < total subscription days)
        const menuObj = menus.length > 0 ? menus[dayIdx % menus.length] : { name: order.planId.title, description: 'Standard subscription meal', calories: 600, allergens: [] };
        
        schedules.push({
          subscriptionOrderId: order._id,
          restaurantId: order.restaurantId,
          customerId: order.customerId,
          deliveryDate: dateStr,
          mealTiming: order.preferredMealTimings || order.planId.deliveryTimings,
          menuItemSnapshot: {
            name: menuObj.name,
            image: menuObj.image,
            description: menuObj.description,
            calories: menuObj.calories,
            allergens: menuObj.allergens
          },
          extrasSnapshot: order.extras.map(e => ({ name: e.name, quantity: e.quantity, price: e.price })),
          deliveryAddress: order.deliveryAddress,
          city: order.city,
          phone: order.phone,
          deliveryArea: order.city, // Default grouping area
          isFoodReady: false, // Must be marked ready by restaurant
          status: isVacation ? 'skipped-vacation' : 'preparing',
          notes: isVacation ? 'Customer on vacation mode' : order.deliveryInstructions
        });

        current.setDate(current.getDate() + 1);
        dayIdx++;
      }

      if (schedules.length > 0) {
        await DeliverySchedule.insertMany(schedules);
      }
    }

    order.updatedAt = new Date();
    await order.save();

    // Notify Customer
    emitSocketEvent(req, `customer_${order.customerId}`, 'request_approved', { order, status });
    await Notification.create({
      userId: order.customerId,
      title: `Subscription Request ${status.toUpperCase()}`,
      message: `Your subscription request for ${order.planId.title} has been ${status}.`,
      type: 'order'
    });

    res.json({ message: `Subscription request ${status} successfully.`, order });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// GET /api/subscription/restaurant/subscribers - View active subscribers dashboard & highlight modifications
router.get('/restaurant/subscribers', authMiddleware, async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({ userId: req.user.id });
    if (!restaurant) return res.status(404).json({ error: 'Restaurant profile not found' });

    const subscribers = await SubscriptionOrder.find({ restaurantId: restaurant._id, status: { $in: ['active', 'paused'] } })
      .populate('customerId', 'name email phone city profileImage')
      .populate('planId', 'title planType mealType totalPrice deliveryTimings')
      .sort({ updatedAt: -1 })
      .lean();

    res.json(subscribers);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// GET /api/subscription/restaurant/daily-deliveries - View today's deliveries grouped by area/timing
router.get('/restaurant/daily-deliveries', authMiddleware, async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({ userId: req.user.id });
    if (!restaurant) return res.status(404).json({ error: 'Restaurant profile not found' });

    const { date, area, timing } = req.query;
    const todayStr = date || new Date().toISOString().split('T')[0];

    const query = { restaurantId: restaurant._id, deliveryDate: todayStr };
    if (area) query.deliveryArea = area;
    if (timing) query.mealTiming = timing;

    const deliveries = await DeliverySchedule.find(query)
      .populate('customerId', 'name email phone profileImage')
      .populate({ path: 'subscriptionOrderId', populate: { path: 'planId', select: 'title planType' } })
      .populate('riderId', 'name phone')
      .sort({ mealTiming: 1 })
      .lean();

    res.json(deliveries);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// PUT /api/subscription/restaurant/delivery/:id/ready - Mark food ready (enables rider assignment)
router.put('/restaurant/delivery/:id/ready', authMiddleware, async (req, res) => {
  try {
    const delivery = await DeliverySchedule.findByIdAndUpdate(req.params.id, { isFoodReady: true, status: 'ready' }, { new: true })
      .populate('customerId', 'name email phone')
      .populate('subscriptionOrderId');

    emitSocketEvent(req, `delivery_${delivery._id}`, 'delivery_ready', { delivery });
    res.json({ message: 'Food marked as READY. Rider can now be assigned.', delivery });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// POST /api/subscription/restaurant/assign-rider - Assign rider (batch or single, platform rider or own rider)
router.post('/restaurant/assign-rider', authMiddleware, async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({ userId: req.user.id });
    if (!restaurant) return res.status(404).json({ error: 'Restaurant profile not found' });

    const { deliveryScheduleIds, riderId, isOwnRider, batchArea, mealTiming } = req.body;
    if (!Array.isArray(deliveryScheduleIds) || deliveryScheduleIds.length === 0) {
      return res.status(400).json({ error: 'No delivery schedules selected for assignment.' });
    }

    // Verify all selected deliveries are marked ready
    const deliveries = await DeliverySchedule.find({ _id: { $in: deliveryScheduleIds } });
    const unready = deliveries.filter(d => !d.isFoodReady);
    if (unready.length > 0) {
      return res.status(400).json({ error: 'Cannot assign rider. One or more selected meals are not marked READY yet.' });
    }

    const updateFields = { status: 'pickedup', isOwnRider: !!isOwnRider };
    if (riderId) updateFields.riderId = riderId;

    await DeliverySchedule.updateMany({ _id: { $in: deliveryScheduleIds } }, updateFields);

    let assignment = null;
    if (riderId && !isOwnRider) {
      assignment = new RiderAssignment({
        restaurantId: restaurant._id,
        riderId,
        deliveryScheduleIds,
        batchArea: batchArea || restaurant.city,
        mealTiming: mealTiming || 'Lunch',
        deliveryDate: new Date().toISOString().split('T')[0],
        status: 'assigned'
      });
      await assignment.save();
      emitSocketEvent(req, `rider_${riderId}`, 'rider_assigned', { assignment, count: deliveryScheduleIds.length });
    }

    res.json({ message: 'Rider assigned successfully to selected deliveries.', count: deliveryScheduleIds.length, assignment });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// PUT /api/subscription/restaurant/delivery/:id/own-rider-status - Manual status update for own rider flow
router.put('/restaurant/delivery/:id/own-rider-status', authMiddleware, async (req, res) => {
  try {
    const { status } = req.body; // 'preparing', 'ready', 'pickedup', 'ontheway', 'delivered'
    const delivery = await DeliverySchedule.findById(req.params.id);
    if (!delivery) return res.status(404).json({ error: 'Delivery schedule not found' });

    delivery.status = status;
    if (status === 'delivered') delivery.deliveredAt = new Date();
    await delivery.save();

    emitSocketEvent(req, `customer_${delivery.customerId}`, 'delivery_status', { delivery, status });
    res.json({ message: `Own rider delivery status updated to ${status}`, delivery });
  } catch (err) { res.status(500).json({ error: err.message }); }
});


// ==========================================
// 3. RIDER PORTAL ENDPOINTS
// ==========================================

// GET /api/subscription/rider/deliveries - View grouped deliveries assigned to rider
router.get('/rider/deliveries', authMiddleware, async (req, res) => {
  try {
    const todayStr = new Date().toISOString().split('T')[0];
    const assignments = await RiderAssignment.find({ riderId: req.user.id, deliveryDate: todayStr })
      .populate('restaurantId', 'name address phone image')
      .populate({
        path: 'deliveryScheduleIds',
        populate: { path: 'customerId', select: 'name phone profileImage' }
      })
      .sort({ createdAt: -1 })
      .lean();

    res.json(assignments);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// PUT /api/subscription/rider/delivery/:id/status - Update delivery status by rider
router.put('/rider/delivery/:id/status', authMiddleware, async (req, res) => {
  try {
    const { status } = req.body; // 'pickedup', 'ontheway', 'delivered'
    const delivery = await DeliverySchedule.findById(req.params.id);
    if (!delivery) return res.status(404).json({ error: 'Delivery schedule not found' });

    delivery.status = status;
    if (status === 'delivered') delivery.deliveredAt = new Date();
    await delivery.save();

    // If delivered, check if rider assignment is complete
    if (status === 'delivered') {
      // Find rider assignment containing this delivery
      const assignment = await RiderAssignment.findOne({ deliveryScheduleIds: delivery._id });
      if (assignment) {
        const allDeliveries = await DeliverySchedule.find({ _id: { $in: assignment.deliveryScheduleIds } });
        const pending = allDeliveries.filter(d => d.status !== 'delivered' && d.status !== 'cancelled');
        if (pending.length === 0) {
          assignment.status = 'completed';
          await assignment.save();

          // Make rider offline so they need to go online and system will assign queue number
          await RiderProfile.findOneAndUpdate(
            { userId: req.user.id },
            {
              status: 'idle',
              currentOrderId: null,
              isReady: false,
              queueNumber: 0,
              $inc: { earnings: 200, completedTrips: 1 }
            }
          );
        }
      }
    }

    emitSocketEvent(req, `customer_${delivery.customerId}`, 'delivery_status', { delivery, status });
    res.json({ message: `Delivery status updated to ${status}`, delivery });
  } catch (err) { res.status(500).json({ error: err.message }); }
});


// ==========================================
// 4. ADMIN PORTAL ENDPOINTS
// ==========================================

// GET /api/subscription/admin/analytics - Platform wide subscription analytics
router.get('/admin/analytics', authMiddleware, async (req, res) => {
  try {
    const totalPlans = await SubscriptionPlan.countDocuments();
    const activePlans = await SubscriptionPlan.countDocuments({ isActive: true });
    const totalSubscriptions = await SubscriptionOrder.countDocuments();
    const activeSubscriptions = await SubscriptionOrder.countDocuments({ status: 'active' });
    
    // Revenue calculation
    const orders = await SubscriptionOrder.find({ status: { $in: ['active', 'completed'] } }).lean();
    const totalRevenue = orders.reduce((sum, o) => sum + (o.totalAmount || 0), 0);

    // Delivery success rate
    const totalDeliveries = await DeliverySchedule.countDocuments({ status: { $ne: 'cancelled' } });
    const deliveredCount = await DeliverySchedule.countDocuments({ status: 'delivered' });
    const successRate = totalDeliveries > 0 ? ((deliveredCount / totalDeliveries) * 100).toFixed(1) : 100;

    // Commission settings simulation (e.g. 10%)
    const commissionEarned = (totalRevenue * 0.10).toFixed(2);

    res.json({
      totalPlans,
      activePlans,
      totalSubscriptions,
      activeSubscriptions,
      totalRevenue,
      commissionEarned,
      deliverySuccessRate: `${successRate}%`,
      totalDeliveries,
      deliveredCount
    });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// PUT /api/subscription/admin/toggle-system - Admin toggle subscription system
router.put('/admin/toggle-system', authMiddleware, async (req, res) => {
  try {
    const { isEnabled } = req.body;
    // Store global setting in memory or a config collection (simulated via response)
    res.json({ message: `Subscription system has been ${isEnabled ? 'ENABLED' : 'DISABLED'} globally.`, isEnabled });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

module.exports = router;
