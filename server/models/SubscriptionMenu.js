const mongoose = require('mongoose');

const subscriptionMenuSchema = new mongoose.Schema({
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true, index: true },
  planId: { type: mongoose.Schema.Types.ObjectId, ref: 'SubscriptionPlan', required: true, index: true },
  dayNumber: { type: Number, required: true }, // 1 to 7 for weekly, 1 to 30 for monthly
  dayName: { type: String, required: true }, // e.g. "Monday", "Day 1"
  mealTiming: { type: String, enum: ['breakfast', 'lunch', 'dinner'], required: true },
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  calories: { type: Number },
  ingredients: [{ type: String }],
  quantity: { type: String, default: '1 portion' },
  allergens: [{ type: String }],
  customNotes: { type: String },
  // Enhanced fields for professional menu display
  servingTime: { type: String }, // e.g. "8:00 AM - 9:00 AM"
  portionSize: { type: String }, // e.g. "Regular", "Large"
  isVegetarian: { type: Boolean, default: false },
  spiceLevel: { type: String, enum: ['mild', 'medium', 'hot', 'extra-hot', ''], default: '' },
  createdAt: { type: Date, default: Date.now }
});

// Compound index for efficient queries
subscriptionMenuSchema.index({ planId: 1, dayNumber: 1, mealTiming: 1 });

module.exports = mongoose.model('SubscriptionMenu', subscriptionMenuSchema);
