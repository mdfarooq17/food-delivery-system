const mongoose = require('mongoose');

const passwordResetOtpSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  otpHash: { type: String, required: true },
  expiresAt: { type: Date, required: true },
  used: { type: Boolean, default: false },
  verificationAttempts: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  verifiedAt: { type: Date },
  requestedFromIp: { type: String },
  requestedUserAgent: { type: String }
});

module.exports = mongoose.model('PasswordResetOtp', passwordResetOtpSchema);
