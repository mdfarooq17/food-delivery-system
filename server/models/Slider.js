const mongoose = require('mongoose');

const sliderSchema = new mongoose.Schema({
  badge: { type: String, default: 'FEATURED' },
  title1: { type: String, required: true },
  title2: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
  thumb: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Slider', sliderSchema);
