const express = require('express');
const router = express.Router();

// Get restaurants
router.get('/restaurants', async (req, res) => {
  // Implement
  res.json({ message: 'Customer restaurants endpoint' });
});

// Place order
router.post('/order', async (req, res) => {
  // Implement
  res.json({ message: 'Order placed' });
});

module.exports = router;