const mongoose = require('mongoose');

const passwordResetRequestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  email: { type: String, required: true },
  role: {
    type: String,
    enum: ['admin', 'customer', 'restaurant', 'rider'],
    required: true,
  },
  newPasswordHash: { type: String, required: true },
  status: {
    type: String,
    enum: ['pending', 'approved', 'denied', 'requires_info'],
    default: 'pending',
  },
  requestedFromIp: { type: String },
  requestedUserAgent: { type: String },
  oldPasswordHash: { type: String },
  previousLoginDevices: [{ ipAddress: String, userAgent: String, lastLogin: Date }],
  adminMessages: [
    {
      by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      message: String,
      createdAt: { type: Date, default: Date.now }
    }
  ],
  requestedAt: { type: Date, default: Date.now },
  reviewedAt: { type: Date },
  reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('PasswordResetRequest', passwordResetRequestSchema);
