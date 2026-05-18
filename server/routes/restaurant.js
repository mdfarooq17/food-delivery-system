const express = require('express');
const Restaurant = require('../models/Restaurant');
const MenuItem = require('../models/MenuItem');
const Order = require('../models/Order');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Create/Update restaurant profile
router.post('/profile', authMiddleware, async (req, res) => {
  try {
    const { name, description, address, city, phone, image } = req.body;
    let restaurant = await Restaurant.findOne({ userId: req.user.id });
    if (restaurant) {
      restaurant = await Restaurant.findByIdAndUpdate(restaurant._id, 
        { name, description, address, city, phone, image }, 
        { new: true });
    } else {
      restaurant = new Restaurant({ userId: req.user.id, name, description, address, city, phone, image });
      await restaurant.save();
    }
    res.json(restaurant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get restaurant profile
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({ userId: req.user.id });
    res.json(restaurant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add menu item
router.post('/menu', authMiddleware, async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({ userId: req.user.id });
    if (!restaurant) return res.status(400).json({ error: 'Restaurant profile not found' });
    
    const { name, description, price, category, image } = req.body;
    const menuItem = new MenuItem({
      restaurantId: restaurant._id,
      name,
      description,
      price,
      category,
      image
    });
    await menuItem.save();
    res.status(201).json(menuItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get restaurant menu
router.get('/menu', authMiddleware, async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({ userId: req.user.id });
    if (!restaurant) return res.status(400).json({ error: 'Restaurant profile not found' });
    
    const menuItems = await MenuItem.find({ restaurantId: restaurant._id });
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update menu item
router.put('/menu/:id', authMiddleware, async (req, res) => {
  try {
    const { name, description, price, category, isAvailable } = req.body;
    const menuItem = await MenuItem.findByIdAndUpdate(req.params.id, 
      { name, description, price, category, isAvailable }, 
      { new: true });
    res.json(menuItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get restaurant orders
router.get('/orders', authMiddleware, async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({ userId: req.user.id });
    if (!restaurant) return res.status(400).json({ error: 'Restaurant profile not found' });
    
    const orders = await Order.find({ restaurantId: restaurant._id }).populate('customerId');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update order status
router.put('/order/:id/status', authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(req.params.id, 
      { status, updatedAt: new Date() }, 
      { new: true });

    if (status === 'preparing') {
      // Trigger automatic rider assignment
      await assignRider(order);
    }

    res.json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Manually dispatch/request rider
router.post('/order/:id/dispatch-rider', authMiddleware, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    
    await assignRider(order);
    const updatedOrder = await Order.findById(order._id);
    res.json({ message: 'Rider request triggered successfully!', order: updatedOrder });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

async function assignRider(order) {
  try {
    const Restaurant = require('../models/Restaurant');
    const RiderProfile = require('../models/RiderProfile');
    
    const restaurant = await Restaurant.findById(order.restaurantId);
    if (!restaurant) return;

    // 1. Cleanup timed out assignments first
    const oneMinAgo = new Date(Date.now() - 60000);
    const timedOutRiders = await RiderProfile.find({ status: 'assigned', assignmentTime: { $lt: oneMinAgo } });
    
    for (let p of timedOutRiders) {
      const timedOutOrder = await Order.findOne({ assignedRiderId: p.userId, riderId: null });
      
      const lastRider = await RiderProfile.findOne({ city: p.city, isReady: true }).sort('-queueNumber');
      p.queueNumber = lastRider ? lastRider.queueNumber + 1 : p.queueNumber + 1;
      p.status = 'idle';
      p.assignmentTime = null;
      await p.save();
      
      if (timedOutOrder) {
        timedOutOrder.assignedRiderId = null;
        timedOutOrder.assignmentTime = null;
        await timedOutOrder.save();

        const nextRider = await RiderProfile.findOne({ 
          city: p.city, 
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

    // 2. Find the next available rider in the same city
    const rider = await RiderProfile.findOne({ 
      city: restaurant.city, 
      isReady: true,
      status: 'idle'
    }).sort('queueNumber');

    if (rider) {
      order.assignedRiderId = rider.userId;
      order.assignmentTime = new Date();
      await order.save();
      
      // Update rider status
      rider.status = 'assigned';
      rider.assignmentTime = new Date();
      await rider.save();
    }
  } catch (err) {
    console.error('Assignment error:', err);
  }
}

// Delete menu item
router.delete('/menu/:id', authMiddleware, async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Menu item deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get reviews for a specific menu item
router.get('/menu-item/:id/reviews', authMiddleware, async (req, res) => {
  try {
    const reviews = await Order.find({
      'items.menuItemId': req.params.id,
      'review.rating': { $exists: true }
    })
    .populate('customerId', 'name')
    .select('review customerId createdAt');
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;