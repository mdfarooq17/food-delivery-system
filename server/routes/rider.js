const express = require('express');
const Order = require('../models/Order');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Get available orders (ready for pickup and not assigned to a rider)
router.get('/orders/available', authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== 'rider') return res.status(403).json({ error: 'Access denied' });
    
    // An order is available if it's 'ready' and has no rider assigned
    const orders = await Order.find({ status: 'ready', riderId: { $exists: false } })
      .populate('restaurantId', 'name address')
      .populate('customerId', 'name');
    
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get deliveries assigned to this rider
router.get('/orders/my-deliveries', authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== 'rider') return res.status(403).json({ error: 'Access denied' });
    
    const orders = await Order.find({ riderId: req.user.id })
      .populate('restaurantId', 'name address')
      .populate('customerId', 'name');
    
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Accept an order
router.put('/order/:id/accept', authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== 'rider') return res.status(403).json({ error: 'Access denied' });
    
    const order = await Order.findOne({ _id: req.params.id, status: 'ready', riderId: { $exists: false } });
    if (!order) return res.status(400).json({ error: 'Order not available for pickup' });
    
    order.riderId = req.user.id;
    // We could change status to 'assigned' or similar, but the user requested 'ready' -> 'picked_up' -> 'delivered'.
    // Let's keep it 'ready' but now it has a riderId so it's assigned to this rider.
    await order.save();
    
    res.json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update order status (e.g. 'picked_up', 'delivered')
router.put('/order/:id/status', authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== 'rider') return res.status(403).json({ error: 'Access denied' });
    
    const { status } = req.body;
    const order = await Order.findOneAndUpdate(
      { _id: req.params.id, riderId: req.user.id },
      { status, updatedAt: new Date() },
      { new: true }
    );
    
    if (!order) return res.status(404).json({ error: 'Order not found or not assigned to you' });
    res.json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
