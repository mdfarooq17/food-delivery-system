const mongoose = require('mongoose');

const riderProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  city: { type: String },
  isReady: { type: Boolean, default: false }, // Overall "Online/Offline" toggle
  status: { type: String, enum: ['idle', 'assigned', 'delivering'], default: 'idle' },
  queueNumber: { type: Number, default: 0 },
  lastActive: { type: Date, default: Date.now },
  currentOrderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
  assignmentTime: { type: Date },
  vehicleType: { type: String },
  phone: { type: String },
  earnings: { type: Number, default: 0 },
  completedTrips: { type: Number, default: 0 }
});

module.exports = mongoose.model('RiderProfile', riderProfileSchema);
