const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/foodDelivery', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const SecurityLog = require('./models/SecurityLog');
const BlockedIP = require('./models/BlockedIP');

// Global Security & Threat Monitoring Middleware
app.use(async (req, res, next) => {
  const clientIp = req.ip || req.connection?.remoteAddress || 'unknown';
  
  try {
    const isBlocked = await BlockedIP.findOne({ ipAddress: clientIp });
    if (isBlocked) {
      return res.status(403).json({ error: 'Access Denied: Your IP address has been permanently blocked due to security violations.' });
    }
  } catch (e) { console.error('BlockedIP check error', e); }

  const url = req.originalUrl || '';
  const bodyStr = JSON.stringify(req.body || {});
  const queryStr = JSON.stringify(req.query || {});
  
  // Check for common attack signatures (NoSQL injection, XSS, unethical requests)
  if (
    url.includes('$where') || url.includes('.php') || url.includes('.env') || url.includes('.git') ||
    bodyStr.includes('$gt') || bodyStr.includes('$ne') || bodyStr.includes('<script>') ||
    queryStr.includes('$gt') || queryStr.includes('$ne') || queryStr.includes('<script>')
  ) {
    try {
      await SecurityLog.create({
        eventType: 'SUSPICIOUS_PAYLOAD',
        ipAddress: req.ip || req.connection?.remoteAddress || 'unknown',
        userAgent: req.headers['user-agent'] || 'unknown',
        endpoint: req.originalUrl,
        method: req.method,
        attemptedCredentials: { email: req.headers?.authorization ? 'Authenticated User' : 'Anonymous', role: 'unknown' },
        severity: 'high',
        details: `Potential unethical request / attack signature detected in URL or payload.`
      });
    } catch (e) { console.error('Security log error', e); }
    return res.status(403).json({ error: 'Security alert: Suspicious request payload detected and logged.' });
  }
  next();
});

const jwt = require('jsonwebtoken');
const User = require('./models/User');

// User Request Activity Tracking Middleware
app.use(async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
      if (decoded && decoded.id) {
        User.findByIdAndUpdate(decoded.id, { $inc: { apiRequestsCount: 1 } }).catch(() => {});
      }
    } catch (e) {}
  }
  next();
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/customer', require('./routes/customer'));
app.use('/api/restaurant', require('./routes/restaurant'));
app.use('/api/rider', require('./routes/rider'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));