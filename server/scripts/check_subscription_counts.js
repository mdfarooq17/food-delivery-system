const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '..', '.env') });

const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/foodDelivery';

async function run() {
  try {
    await mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB:', MONGO);

    const SubscriptionPlan = require('../../server/models/SubscriptionPlan');
    const SubscriptionMenu = require('../../server/models/SubscriptionMenu');
    const SubscriptionOrder = require('../../server/models/SubscriptionOrder');

    const plans = await SubscriptionPlan.countDocuments();
    const menus = await SubscriptionMenu.countDocuments();
    const orders = await SubscriptionOrder.countDocuments();

    console.log('SubscriptionPlan count:', plans);
    console.log('SubscriptionMenu count:', menus);
    console.log('SubscriptionOrder count:', orders);

    const samplePlan = await SubscriptionPlan.findOne().lean();
    if (samplePlan) console.log('Sample Plan:', { _id: samplePlan._id, title: samplePlan.title, restaurantId: samplePlan.restaurantId, isActive: samplePlan.isActive });

    await mongoose.disconnect();
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

run();
