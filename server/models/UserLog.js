const mongoose = require('mongoose');

const userLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  email: { type: String, required: true },
  action: { 
    type: String, 
    required: true,
    enum: [
      'LOGIN_SUCCESS', 
      'LOGIN_FAILED', 
      'LOGOUT', 
      'PROFILE_UPDATE', 
      'ORDER_PLACED', 
      'PASSWORD_CHANGE', 
      'API_REQUEST',
      'MULTI_DEVICE_LOGIN',
      'ACCOUNT_BLOCKED'
    ]
  },
  ipAddress: { type: String, default: 'unknown' },
  deviceInfo: { type: String, default: 'unknown' },
  details: { type: String },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserLog', userLogSchema);
