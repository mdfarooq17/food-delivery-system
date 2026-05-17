const express = require('express');
const Restaurant = require('../models/Restaurant');
const MenuItem = require('../models/MenuItem');
const Order = require('../models/Order');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Get all restaurants
router.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ isActive: true });
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get menu items for a restaurant
router.get('/restaurant/:id/menu', async (req, res) => {
  try {
    const menuItems = await MenuItem.find({ restaurantId: req.params.id, isAvailable: true });
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Global Search (Restaurants and Dishes)
router.get('/search', async (req, res) => {
  const { query } = req.query;
  if (!query) return res.json({ restaurants: [], dishes: [] });
  
  try {
    const regex = new RegExp(query, 'i');
    
    const restaurants = await Restaurant.find({
      $or: [{ name: regex }, { description: regex }, { categories: regex }],
      isActive: true
    });
    
    const dishes = await MenuItem.find({
      $or: [{ name: regex }, { description: regex }, { category: regex }],
      isAvailable: true
    }).populate('restaurantId', 'name');
    
    res.json({ restaurants, dishes });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get random menu items across all active restaurants
router.get('/menu-items/random', async (req, res) => {
  try {
    // MongoDB aggregation to get random items
    const randomItems = await MenuItem.aggregate([
      { $match: { isAvailable: true } },
      { $sample: { size: 8 } }
    ]);
    
    // Populate the restaurant details
    await MenuItem.populate(randomItems, { path: 'restaurantId', select: 'name' });
    
    res.json(randomItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Place order
router.post('/order', authMiddleware, async (req, res) => {
  try {
    const { restaurantId, items, totalAmount, deliveryFee, deliveryAddress, phone, notes } = req.body;
    const order = new Order({
      customerId: req.user.id,
      restaurantId,
      items,
      totalAmount,
      deliveryFee,
      deliveryAddress,
      phone,
      notes
    });
    await order.save();
    res.status(201).json({ message: 'Order placed', orderId: order._id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get customer orders
router.get('/orders', authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({ customerId: req.user.id }).populate('restaurantId');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get order details
router.get('/order/:id', authMiddleware, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('restaurantId').populate('items.menuItemId');
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Submit order rating and review
router.post('/order/:id/review', authMiddleware, async (req, res) => {
  try {
    const { rating, comment } = req.body;
    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'Rating must be between 1 and 5' });
    }

    const order = await Order.findOne({ _id: req.params.id, customerId: req.user.id });
    if (!order) return res.status(404).json({ error: 'Order not found' });

    if (order.status !== 'delivered') {
      return res.status(400).json({ error: 'You can only review delivered orders' });
    }

    order.review = {
      rating,
      comment,
      createdAt: new Date()
    };
    await order.save();

    // Recalculate average rating of the restaurant
    const Restaurant = require('../models/Restaurant');
    const restaurantOrders = await Order.find({ restaurantId: order.restaurantId, 'review.rating': { $exists: true } });
    
    if (restaurantOrders.length > 0) {
      const sum = restaurantOrders.reduce((acc, curr) => acc + curr.review.rating, 0);
      const avgRating = sum / restaurantOrders.length;
      
      await Restaurant.findByIdAndUpdate(order.restaurantId, { rating: Number(avgRating.toFixed(1)) });
    }

    res.json({ message: 'Review submitted successfully', order });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;