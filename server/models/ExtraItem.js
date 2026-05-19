const mongoose = require('mongoose');

const extraItemSchema = new mongoose.Schema({
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true, index: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String },
  isAvailable: { type: Boolean, default: true },
  quantityLimit: { type: Number, default: 5 },
  repeatOptions: [{ type: String, enum: ['one-time', 'specific-date', 'daily', 'weekly'] }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ExtraItem', extraItemSchema);
