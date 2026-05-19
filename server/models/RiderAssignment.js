const mongoose = require('mongoose');

const riderAssignmentSchema = new mongoose.Schema({
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true, index: true },
  riderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  deliveryScheduleIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'DeliverySchedule' }],
  batchArea: { type: String, required: true },
  mealTiming: { type: String, required: true },
  deliveryDate: { type: String, required: true, index: true }, // YYYY-MM-DD
  status: { type: String, enum: ['assigned', 'pickedup', 'ontheway', 'completed'], default: 'assigned' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('RiderAssignment', riderAssignmentSchema);
