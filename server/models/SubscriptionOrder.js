const mongoose = require('mongoose');

const subscriptionOrderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true, index: true },
  planId: { type: mongoose.Schema.Types.ObjectId, ref: 'SubscriptionPlan', required: true, index: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  preferredMealTimings: { type: String, required: true },
  deliveryAddress: { type: String, required: true },
  city: { type: String, required: true, index: true },
  phone: { type: String, required: true },
  deliveryInstructions: { type: String },
  extras: [{
    extraItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'ExtraItem' },
    name: String,
    price: Number,
    quantity: Number,
    repeatMode: { type: String, enum: ['one-time', 'specific-date', 'daily', 'weekly'] },
    specificDate: Date
  }],
  totalAmount: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'approved', 'active', 'paused', 'cancelled', 'completed', 'rejected'], 
    default: 'pending' 
  },
  vacationDates: [{ type: String }], // YYYY-MM-DD format
  scheduleModifications: [{
    date: { type: String }, // YYYY-MM-DD
    newTiming: String,
    newAddress: String,
    note: String,
    isAcknowledged: { type: Boolean, default: false },
    requestedAt: { type: Date, default: Date.now }
  }],
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SubscriptionOrder', subscriptionOrderSchema);
