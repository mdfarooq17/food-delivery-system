const mongoose = require('mongoose');

const subscriptionPlanSchema = new mongoose.Schema({
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true, index: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  planType: { type: String, enum: ['weekly', 'monthly'], required: true },
  mealType: { type: String, enum: ['breakfast', 'lunch', 'dinner', 'all-day'], required: true },
  totalPrice: { type: Number, required: true },
  discountedPrice: { type: Number, required: true },
  numberOfMeals: { type: Number, required: true },
  deliveryScheduleDescription: { type: String, default: 'Daily scheduled delivery' },
  includedServices: [{ type: String }],
  tags: [{ type: String }], // e.g., Healthy, Diet, Gym, Office, Family
  maxSubscribers: { type: Number, default: 50 },
  currentSubscribers: { type: Number, default: 0 },
  deliveryTimings: { type: String, required: true }, // e.g. "12:30 PM - 01:30 PM"
  deliveryZones: [{ type: String }], // Areas or Cities
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SubscriptionPlan', subscriptionPlanSchema);
