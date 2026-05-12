const express = require('express');
const router = express.Router();

// Add menu item
router.post('/menu', async (req, res) => {
  // Implement
  res.json({ message: 'Menu item added' });
});

// Get orders
router.get('/orders', async (req, res) => {
  // Implement
  res.json({ message: 'Restaurant orders' });
});

module.exports = router;