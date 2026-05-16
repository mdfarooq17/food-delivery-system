const express = require('express');
const Order = require('../models/Order');
const RiderProfile = require('../models/RiderProfile');
const City = require('../models/City');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Get Rider Profile & Status
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    let profile = await RiderProfile.findOne({ userId: req.user.id }).populate('currentOrderId');
    if (!profile) {
      profile = new RiderProfile({ userId: req.user.id });
      await profile.save();
    }
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Toggle Ready Status & Select City
router.put('/status', authMiddleware, async (req, res) => {
  try {
    const { isReady, city } = req.body;
    let profile = await RiderProfile.findOne({ userId: req.user.id });
    
    if (!profile) {
      profile = new RiderProfile({ userId: req.user.id });
    }

    profile.isReady = isReady;
    profile.city = city;
    profile.status = isReady ? 'idle' : 'idle'; // Reset status when toggling

    if (isReady) {
      // Assign next queue number for this city
      const lastRider = await RiderProfile.findOne({ city, isReady: true }).sort('-queueNumber');
      profile.queueNumber = lastRider ? lastRider.queueNumber + 1 : 1;
    } else {
      profile.queueNumber = 0;
    }

    await profile.save();
    res.json(profile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get My Current Assignment (Auto-assigned)
router.get('/assignment', authMiddleware, async (req, res) => {
  try {
    // 1. Global Cleanup of any timed out assignments
    const oneMinAgo = new Date(Date.now() - 60000);
    const timedOutRiders = await RiderProfile.find({ status: 'assigned', assignmentTime: { $lt: oneMinAgo } });
    
    for (let p of timedOutRiders) {
      const timedOutOrder = await Order.findOne({ assignedRiderId: p.userId, riderId: null });
      
      // Move this rider to back of queue
      const lastRider = await RiderProfile.findOne({ city: p.city, isReady: true }).sort('-queueNumber');
      p.queueNumber = lastRider ? lastRider.queueNumber + 1 : p.queueNumber + 1;
      p.status = 'idle';
      p.assignmentTime = null;
      await p.save();
      
      if (timedOutOrder) {
        timedOutOrder.assignedRiderId = null;
        timedOutOrder.assignmentTime = null;
        await timedOutOrder.save();

        // Try re-assigning to next rider
        const Restaurant = require('../models/Restaurant');
        const restaurant = await Restaurant.findById(timedOutOrder.restaurantId);
        if (restaurant) {
          const nextRider = await RiderProfile.findOne({ 
            city: restaurant.city, 
            isReady: true,
            status: 'idle'
          }).sort('queueNumber');

          if (nextRider) {
            timedOutOrder.assignedRiderId = nextRider.userId;
            timedOutOrder.assignmentTime = new Date();
            await timedOutOrder.save();
            
            nextRider.status = 'assigned';
            nextRider.assignmentTime = new Date();
            await nextRider.save();
          }
        }
      }
    }

    const order = await Order.findOne({
      $or: [
        { assignedRiderId: req.user.id, status: { $in: ['ready', 'preparing'] } },
        { riderId: req.user.id, status: { $in: ['ready', 'pickedup', 'preparing'] } }
      ]
    }).populate('restaurantId', 'name address phone').populate('customerId', 'name address phone');
    
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Accept Assignment
router.put('/order/:id/accept', authMiddleware, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    
    if (!order.assignedRiderId || order.assignedRiderId.toString() !== req.user.id) {
      return res.status(403).json({ error: 'This order is not assigned to you or expired' });
    }

    order.riderId = req.user.id;
    order.assignedRiderId = null;
    await order.save();

    // Update Rider Profile
    await RiderProfile.findOneAndUpdate(
      { userId: req.user.id }, 
      { status: 'delivering', currentOrderId: order._id, assignmentTime: null }
    );

    res.json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Reject Assignment
router.put('/order/:id/reject', authMiddleware, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    
    if (order.assignedRiderId && order.assignedRiderId.toString() === req.user.id) {
      order.assignedRiderId = null;
      order.assignmentTime = null;
      await order.save();

      // Move rider to back of queue
      const profile = await RiderProfile.findOne({ userId: req.user.id });
      if (profile) {
        const lastRider = await RiderProfile.findOne({ city: profile.city, isReady: true }).sort('-queueNumber');
        profile.queueNumber = lastRider ? lastRider.queueNumber + 1 : profile.queueNumber + 1;
        profile.status = 'idle';
        profile.assignmentTime = null;
        await profile.save();
      }

      // Try re-assigning to next rider
      const Restaurant = require('../models/Restaurant');
      const restaurant = await Restaurant.findById(order.restaurantId);
      if (restaurant) {
        const rider = await RiderProfile.findOne({ 
          city: restaurant.city, 
          isReady: true,
          status: 'idle'
        }).sort('queueNumber');

        if (rider) {
          order.assignedRiderId = rider.userId;
          order.assignmentTime = new Date();
          await order.save();
          
          rider.status = 'assigned';
          rider.assignmentTime = new Date();
          await rider.save();
        }
      }
    }
    res.json({ message: 'Order rejected and passed to next rider.' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update Delivery Status
router.put('/order/:id/status', authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findOneAndUpdate(
      { _id: req.params.id, riderId: req.user.id },
      { status, updatedAt: new Date() },
      { new: true }
    );
    
    if (!order) return res.status(404).json({ error: 'Order not found or not assigned to you' });
    
    if (status === 'delivered') {
      const fee = order.deliveryFee || 150;
      await RiderProfile.findOneAndUpdate(
        { userId: req.user.id }, 
        { 
          status: 'idle', 
          currentOrderId: null,
          $inc: { earnings: fee, completedTrips: 1 }
        }
      );
    }

    res.json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get Cities for Selection
router.get('/cities', async (req, res) => {
  try {
    const cities = await City.find({ isActive: true });
    res.json(cities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
