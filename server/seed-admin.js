const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/foodDelivery');
    console.log('Connected to MongoDB...');

    const email = 'admin@foodflow.com';
    const existingAdmin = await User.findOne({ email });

    if (existingAdmin) {
      console.log('Admin already exists.');
      process.exit();
    }

    const hashedPassword = await bcrypt.hash('admin123', 10);
    const admin = new User({
      name: 'System Admin',
      email: email,
      password: hashedPassword,
      role: 'admin'
    });

    await admin.save();
    console.log('Admin account created successfully!');
    console.log('Email: admin@foodflow.com');
    console.log('Password: admin123');
    process.exit();
  } catch (err) {
    console.error('Error seeding admin:', err);
    process.exit(1);
  }
};

seedAdmin();
