const mongoose = require('mongoose');

const securityLogSchema = new mongoose.Schema({
  eventType: { 
    type: String, 
    required: true,
    enum: [
      'FAILED_ADMIN_LOGIN', 
      'UNAUTHORIZED_ADMIN_ACCESS', 
      'API_RATE_LIMIT_EXCEEDED', 
      'SUSPICIOUS_PAYLOAD', 
      'UNAUTHENTICATED_REQUEST'
    ]
  },
  ipAddress: { type: String, default: 'unknown' },
  userAgent: { type: String, default: 'unknown' },
  endpoint: { type: String, default: 'unknown' },
  method: { type: String, default: 'GET' },
  attemptedCredentials: {
    email: { type: String },
    role: { type: String },
    providedToken: { type: String }
  },
  severity: { type: String, enum: ['high', 'medium', 'low'], default: 'medium' },
  details: { type: String },
  isRead: { type: Boolean, default: false },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SecurityLog', securityLogSchema);
