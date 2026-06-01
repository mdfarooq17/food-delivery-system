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

const SecurityLog = require('../models/SecurityLog');
const BlockedIP = require('../models/BlockedIP');
const UserLog = require('../models/UserLog');
const RiderProfile = require('../models/RiderProfile');
const MenuItem = require('../models/MenuItem');

const router = express.Router();

// Middleware to check admin role
const isAdmin = async (req, res, next) => {
  if (req.user.role !== 'admin') {
    try {
      await SecurityLog.create({
        eventType: 'UNAUTHORIZED_ADMIN_ACCESS',
        ipAddress: req.ip || req.connection.remoteAddress,
        userAgent: req.headers['user-agent'] || 'unknown',
        endpoint: req.originalUrl,
        method: req.method,
        attemptedCredentials: { email: req.user.email || 'unknown', role: req.user.role, providedToken: req.headers.authorization },
        severity: 'high',
        details: `User with role ${req.user.role} attempted to access protected admin endpoint.`
      });
    } catch (e) { console.error('Security log error', e); }
    return res.status(403).json({ error: 'Access denied: Security incident logged.' });
  }
  next();
};

// Get all security logs
router.get('/security-logs', authMiddleware, isAdmin, async (req, res) => {
  try {
    const logs = await SecurityLog.find().sort({ timestamp: -1 });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Mark security logs as read
router.put('/security-logs/mark-read', authMiddleware, isAdmin, async (req, res) => {
  try {
    await SecurityLog.updateMany({ isRead: { $ne: true } }, { $set: { isRead: true } });
    res.json({ message: 'All security logs marked as read' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Block IP address and associated user account
router.post('/security/block-ip', authMiddleware, isAdmin, async (req, res) => {
  const { ipAddress, email } = req.body;
  try {
    if (ipAddress && ipAddress !== 'unknown') {
      await BlockedIP.findOneAndUpdate(
        { ipAddress },
        { ipAddress, reason: 'Security Threat / Attack' },
        { upsert: true }
      );
    }
    if (email) {
      await User.findOneAndUpdate({ email }, { isBlocked: true });
    }
    res.json({ message: 'IP address and associated account blocked successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Force logout associated user account
router.post('/security/force-logout', authMiddleware, isAdmin, async (req, res) => {
  const { email } = req.body;
  try {
    if (email) {
      await User.findOneAndUpdate({ email }, { forceLogout: true });
      res.json({ message: 'User session terminated successfully' });
    } else {
      res.status(400).json({ error: 'No email associated with this log' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a security log
router.delete('/security-logs/:id', authMiddleware, isAdmin, async (req, res) => {
  try {
    await SecurityLog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Security log deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- User Activity & Audit Logs ---

// Get all user activity logs
router.get('/user-logs', authMiddleware, isAdmin, async (req, res) => {
  try {
    const logs = await UserLog.find()
      .populate('userId', 'name email role profileImage')
      .sort({ timestamp: -1 });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get user audit summary
router.get('/user-audit-summary', authMiddleware, isAdmin, async (req, res) => {
  try {
    const users = await User.find({}, '-password').sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a user log
router.delete('/user-logs/:id', authMiddleware, isAdmin, async (req, res) => {
  try {
    await UserLog.findByIdAndDelete(req.params.id);
    res.json({ message: 'User log deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Clear all user logs
router.post('/user-logs/clear', authMiddleware, isAdmin, async (req, res) => {
  try {
    await UserLog.deleteMany({});
    res.json({ message: 'All user logs cleared successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Reset user attempts / requests counter
router.post('/user-audit/reset-attempts', authMiddleware, isAdmin, async (req, res) => {
  const { userId, type } = req.body;
  try {
    const update = type === 'logins' ? { loginAttempts: 0 } : { apiRequestsCount: 0 };
    await User.findByIdAndUpdate(userId, update);
    res.json({ message: 'Counter reset successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all users
router.get('/users', authMiddleware, isAdmin, async (req, res) => {
  try {
    const users = await User.find({}, '-password').lean();
    
    const restaurants = await Restaurant.find().lean();
    const userToRestaurantMap = {};
    restaurants.forEach(r => {
      userToRestaurantMap[r.userId.toString()] = r._id;
    });

    for (let user of users) {
      let count = 0;
      if (user.role === 'customer' || user.role === 'admin') {
        count = await Order.countDocuments({ customerId: user._id });
      } else if (user.role === 'rider') {
        count = await Order.countDocuments({ riderId: user._id });
      } else if (user.role === 'restaurant') {
        const restId = userToRestaurantMap[user._id.toString()];
        if (restId) {
          count = await Order.countDocuments({ restaurantId: restId });
        }
      }
      user.ordersCount = count;
    }

    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get comprehensive user details (for Admin inspection of Rider/Restaurant/Customer data)
router.get('/users/:id/details', authMiddleware, isAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id, '-password');
    if (!user) return res.status(404).json({ error: 'User not found' });

    let details = { user };

    if (user.role === 'rider') {
      const riderProfile = await RiderProfile.findOne({ userId: user._id }).populate('currentOrderId');
      const riderOrders = await Order.find({ riderId: user._id })
        .populate('restaurantId', 'name address')
        .populate('customerId', 'name email phone')
        .sort({ createdAt: -1 });
      details.riderProfile = riderProfile;
      details.riderOrders = riderOrders;
    } else if (user.role === 'restaurant') {
      const restaurant = await Restaurant.findOne({ userId: user._id });
      if (restaurant) {
        const menuItems = await MenuItem.find({ restaurantId: restaurant._id });
        const restaurantOrders = await Order.find({ restaurantId: restaurant._id })
          .populate('customerId', 'name email phone')
          .populate('riderId', 'name phone')
          .sort({ createdAt: -1 });
        details.restaurant = restaurant;
        details.menuItems = menuItems;
        details.restaurantOrders = restaurantOrders;
      }
    } else {
      // customer or admin
      const customerOrders = await Order.find({ customerId: user._id })
        .populate('restaurantId', 'name address')
        .populate('riderId', 'name phone')
        .sort({ createdAt: -1 });
      details.customerOrders = customerOrders;
    }

    res.json(details);
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

// Update user (edit details, role, active/blocked status, optional admin password reset)
router.put('/users/:id', authMiddleware, isAdmin, async (req, res) => {
  try {
    const { name, email, role, phone, city, isActive, isBlocked, password } = req.body;
    const updateData = { name, email, role, phone, city, isActive, isBlocked };
    if (password && password.trim().length > 0) {
      updateData.password = await bcrypt.hash(password, 10);
    }
    const user = await User.findByIdAndUpdate(req.params.id, updateData, { new: true, select: '-password' });
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