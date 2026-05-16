const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  items: [{
    menuItemId: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
    quantity: Number
  }],
  totalAmount: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'accepted', 'preparing', 'ready', 'pickedup', 'delivered', 'cancelled'], default: 'pending' },
  riderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  assignedRiderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  assignmentTime: { type: Date },
  deliveryFee: { type: Number, default: 0 },
  deliveryAddress: String,
  phone: String,
  notes: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);