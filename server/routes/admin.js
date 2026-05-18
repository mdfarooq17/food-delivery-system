const express = require('express');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('../models/User');
const Restaurant = require('../models/Restaurant');
const Order = require('../models/Order');
const Feedback = require('../models/Feedback');
const Notification = require('../models/Notification');
const Slider = require('../models/Slider');
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

// Add user manually
router.post('/users', authMiddleware, isAdmin, async (req, res) => {
  try {
    const { name, email, password, role, phone, city } = req.body;
    const hashedPassword = await bcrypt.hash(password || 'DefaultPass123!', 10);
    const user = new User({ name, email, password: hashedPassword, role, phone, city, address: city, isActive: true, isBlocked: false });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update user (edit details, role, active/blocked status)
router.put('/users/:id', authMiddleware, isAdmin, async (req, res) => {
  try {
    const { name, email, role, phone, city, isActive, isBlocked } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { name, email, role, phone, city, isActive, isBlocked }, { new: true, select: '-password' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete user
router.delete('/users/:id', authMiddleware, isAdmin, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
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

// Approve/Reject restaurant status
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

// Update restaurant details
router.put('/restaurants/:id', authMiddleware, isAdmin, async (req, res) => {
  try {
    const { name, description, address, city, phone, isActive } = req.body;
    const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, { name, description, address, city, phone, isActive }, { new: true });
    res.json(restaurant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete restaurant
router.delete('/restaurants/:id', authMiddleware, isAdmin, async (req, res) => {
  try {
    await Restaurant.findByIdAndDelete(req.params.id);
    res.json({ message: 'Restaurant deleted successfully' });
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

    let dbStats = {};
    if (mongoose.connection && mongoose.connection.db) {
      try {
        dbStats = await mongoose.connection.db.stats();
      } catch (dbErr) {
        console.error('Error fetching db stats:', dbErr);
      }
    }

    res.json({
      totalUsers,
      totalRestaurants,
      totalOrders,
      totalRevenue,
      dbStats
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// City Management
const City = require('../models/City');

router.get('/cities', authMiddleware, isAdmin, async (req, res) => {
  try {
    const cities = await City.find();
    res.json(cities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/cities', authMiddleware, isAdmin, async (req, res) => {
  try {
    const { name } = req.body;
    const city = new City({ name, addedBy: req.user.id });
    await city.save();
    res.status(201).json(city);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/cities/:id', authMiddleware, isAdmin, async (req, res) => {
  try {
    const { isActive } = req.body;
    const city = await City.findByIdAndUpdate(req.params.id, { isActive }, { new: true });
    res.json(city);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/cities/:id', authMiddleware, isAdmin, async (req, res) => {
  try {
    await City.findByIdAndDelete(req.params.id);
    res.json({ message: 'City removed' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Category Management
const Category = require('../models/Category');

router.get('/categories', authMiddleware, isAdmin, async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/categories', authMiddleware, isAdmin, async (req, res) => {
  try {
    const { name } = req.body;
    const category = new Category({ name, addedBy: req.user.id });
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/categories/:id', authMiddleware, isAdmin, async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ message: 'Category removed' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// --- Feedbacks & Reviews Management ---
router.get('/feedbacks', authMiddleware, isAdmin, async (req, res) => {
  try {
    const generalFeedbacks = await Feedback.find().populate('userId', 'name email').sort({ createdAt: -1 });
    const orderReviews = await Order.find({ 'review.rating': { $exists: true } })
      .populate('customerId', 'name email')
      .populate('restaurantId', 'name')
      .sort({ 'review.createdAt': -1 });
    res.json({ generalFeedbacks, orderReviews });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/feedbacks/:id/status', authMiddleware, isAdmin, async (req, res) => {
  try {
    const { status } = req.body;
    const feedback = await Feedback.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json(feedback);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// --- Custom Notifications Management ---
router.get('/notifications', authMiddleware, isAdmin, async (req, res) => {
  try {
    const notifications = await Notification.find().populate('recipientId', 'name email').sort({ createdAt: -1 });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/notifications', authMiddleware, isAdmin, async (req, res) => {
  try {
    const { recipientId, title, message, type, targetRole } = req.body;
    const notification = new Notification({
      recipientId: recipientId || null,
      title,
      message,
      type: type || 'info',
      targetRole: targetRole || 'all'
    });
    await notification.save();
    res.status(201).json(notification);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/notifications/:id', authMiddleware, isAdmin, async (req, res) => {
  try {
    await Notification.findByIdAndDelete(req.params.id);
    res.json({ message: 'Notification deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// --- Slider Management ---
router.get('/sliders', authMiddleware, isAdmin, async (req, res) => {
  try {
    const sliders = await Slider.find().sort({ order: 1, createdAt: -1 });
    res.json(sliders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/sliders', authMiddleware, isAdmin, async (req, res) => {
  try {
    const { badge, title1, title2, description, price, image, thumb, isActive, order } = req.body;
    const slider = new Slider({ badge, title1, title2, description, price, image, thumb, isActive, order });
    await slider.save();
    res.status(201).json(slider);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/sliders/:id', authMiddleware, isAdmin, async (req, res) => {
  try {
    const { badge, title1, title2, description, price, image, thumb, isActive, order } = req.body;
    const slider = await Slider.findByIdAndUpdate(req.params.id, { badge, title1, title2, description, price, image, thumb, isActive, order }, { new: true });
    res.json(slider);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/sliders/:id', authMiddleware, isAdmin, async (req, res) => {
  try {
    await Slider.findByIdAndDelete(req.params.id);
    res.json({ message: 'Slider deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;