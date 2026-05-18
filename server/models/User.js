const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'customer', 'restaurant', 'rider'], required: true },
  phone: { type: String },
  address: { type: String },
  city: { type: String },
  savedAddresses: [{
    city: String,
    fullAddress: String,
    label: { type: String, default: 'Home' }
  }],
  cart: [{
    menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
    name: String,
    price: Number,
    quantity: Number,
    image: String,
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
    cityAddedFrom: String
  }],
  profileImage: { type: String },
  isActive: { type: Boolean, default: true },
  isBlocked: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);