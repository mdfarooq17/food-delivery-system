const express = require('express');
const Restaurant = require('../models/Restaurant');
const MenuItem = require('../models/MenuItem');
const Order = require('../models/Order');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Create/Update restaurant profile
router.post('/profile', authMiddleware, async (req, res) => {
  try {
    const { name, description, address, phone, image } = req.body;
    let restaurant = await Restaurant.findOne({ userId: req.user.id });
    if (restaurant) {
      restaurant = await Restaurant.findByIdAndUpdate(restaurant._id, 
        { name, description, address, phone, image }, 
        { new: true });
    } else {
      restaurant = new Restaurant({ userId: req.user.id, name, description, address, phone, image });
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

    if (status === 'ready') {
      // Trigger automatic rider assignment
      await assignRider(order);
    }

    res.json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
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
    
    // Riders who timed out
    await RiderProfile.updateMany(
      { status: 'assigned', assignmentTime: { $lt: oneMinAgo } },
      { status: 'idle', assignmentTime: null }
    );

    // Orders that timed out
    await Order.updateMany(
      { assignedRiderId: { $ne: null }, riderId: null, assignmentTime: { $lt: oneMinAgo } },
      { assignedRiderId: null, assignmentTime: null }
    );

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

module.exports = router;