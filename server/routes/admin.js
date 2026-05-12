const express = require('express');
const User = require('../models/User');
const Restaurant = require('../models/Restaurant');
const Order = require('../models/Order');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Middleware to check admin role
const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Access denied' });
  next();
};

// Get all users
router.get('/users', authMiddleware, isAdmin, async (req, res) => {
  try {
    const users = await User.find({}, '-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all restaurants
router.get('/restaurants', authMiddleware, isAdmin, async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Approve/Reject restaurant
router.put('/restaurant/:id/status', authMiddleware, isAdmin, async (req, res) => {
  try {
    const { isActive } = req.body;
    const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, 
      { isActive }, 
      { new: true });
    res.json(restaurant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all orders
router.get('/orders', authMiddleware, isAdmin, async (req, res) => {
  try {
    const orders = await Order.find().populate('customerId').populate('restaurantId');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get dashboard stats
router.get('/stats', authMiddleware, isAdmin, async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalRestaurants = await Restaurant.countDocuments();
    const totalOrders = await Order.countDocuments();
    const totalRevenue = (await Order.aggregate([
      { $group: { _id: null, total: { $sum: '$totalAmount' } } }
    ]))[0]?.total || 0;

    res.json({
      totalUsers,
      totalRestaurants,
      totalOrders,
      totalRevenue
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;