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

// Place order
router.post('/order', authMiddleware, async (req, res) => {
  try {
    const { restaurantId, items, totalAmount, deliveryAddress, phone, notes } = req.body;
    const order = new Order({
      customerId: req.user.id,
      restaurantId,
      items,
      totalAmount,
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

module.exports = router;