const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Notification = require('../models/Notification');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { name, email, password, role, city } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, role, address: city });
    await user.save();
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || 'secret');
    res.json({ 
      token, 
      user: { 
        id: user._id, 
        name: user.name, 
        email: user.email, 
        role: user.role,
        phone: user.phone,
        address: user.address,
        city: user.city,
        savedAddresses: user.savedAddresses,
        profileImage: user.profileImage,
        createdAt: user.createdAt
      } 
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const auth = require('../middleware/auth');

// Get current user profile
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update profile
router.put('/update-profile', auth, async (req, res) => {
  const { name, phone, address, city, profileImage, savedAddresses } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { name, phone, address, city, profileImage, savedAddresses },
      { new: true }
    ).select('-password');
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Change Password
router.put('/change-password', auth, async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (!user || !(await bcrypt.compare(currentPassword, user.password))) {
      return res.status(401).json({ error: 'Current password incorrect' });
    }
    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();
    res.json({ message: 'Password updated successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const City = require('../models/City');

// Get Public Cities List
router.get('/cities', async (req, res) => {
  try {
    const cities = await City.find({ isActive: true });
    res.json(cities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const Category = require('../models/Category');

// Get Public Categories List
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find({ isActive: true });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get User Notifications (Targeted & Broadcasts)
router.get('/notifications', auth, async (req, res) => {
  try {
    const notifications = await Notification.find({
      $or: [
        { recipientId: req.user.id },
        { recipientId: null, targetRole: { $in: ['all', req.user.role] } }
      ]
    }).sort({ createdAt: -1 });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Mark notification as read
router.put('/notifications/:id/read', auth, async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(req.params.id, { isRead: true }, { new: true });
    res.json(notification);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;