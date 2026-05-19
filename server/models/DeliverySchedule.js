const mongoose = require('mongoose');

const deliveryScheduleSchema = new mongoose.Schema({
  subscriptionOrderId: { type: mongoose.Schema.Types.ObjectId, ref: 'SubscriptionOrder', required: true, index: true },
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true, index: true },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  deliveryDate: { type: String, required: true, index: true }, // YYYY-MM-DD
  mealTiming: { type: String, required: true },
  menuItemSnapshot: {
    name: String,
    image: String,
    description: String,
    calories: Number,
    allergens: [String]
  },
  extrasSnapshot: [{
    name: String,
    quantity: Number,
    price: Number
  }],
  deliveryAddress: { type: String, required: true },
  city: { type: String, required: true, index: true },
  phone: { type: String, required: true },
  deliveryArea: { type: String, required: true, index: true }, // For grouping by area
  isFoodReady: { type: Boolean, default: false }, // Rider assignment only happens when food is ready
  riderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  isOwnRider: { type: Boolean, default: false }, // Restaurant's own rider option
  status: { 
    type: String, 
    enum: ['preparing', 'ready', 'pickedup', 'ontheway', 'delivered', 'skipped-vacation', 'cancelled'], 
    default: 'preparing' 
  },
  deliveredAt: { type: Date },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('DeliverySchedule', deliveryScheduleSchema);
