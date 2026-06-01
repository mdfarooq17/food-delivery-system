const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
const Restaurant = require("./models/Restaurant");
const MenuItem = require("./models/MenuItem");
require("dotenv").config();

const seedDemoRestaurant = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/foodDelivery",
    );
    console.log("Connected to MongoDB...");

    const restaurantEmail = "demo-restaurant@foodflow.com";
    let restaurantUser = await User.findOne({ email: restaurantEmail });

    if (!restaurantUser) {
      const hashedPassword = await bcrypt.hash("demo1234", 10);
      restaurantUser = new User({
        name: "Demo Restaurant Owner",
        email: restaurantEmail,
        password: hashedPassword,
        role: "restaurant",
        phone: "+1234567890",
        city: "Demo City",
        address: "123 Demo Street",
      });
      await restaurantUser.save();
      console.log("Created demo restaurant user account:", restaurantEmail);
    } else {
      console.log("Demo restaurant user already exists:", restaurantEmail);
    }

    let restaurant = await Restaurant.findOne({ userId: restaurantUser._id });
    if (!restaurant) {
      restaurant = new Restaurant({
        userId: restaurantUser._id,
        name: "Demo Restaurant",
        description:
          "A demo restaurant with tasty items for testing and presentation.",
        address: "123 Demo Street",
        city: "Demo City",
        phone: "+1234567890",
        image: "https://via.placeholder.com/400x300?text=Demo+Restaurant",
        rating: 4.8,
        isActive: true,
      });
      await restaurant.save();
      console.log("Created demo restaurant entry.");
    } else {
      console.log("Demo restaurant already exists.");
    }

    const demoItems = [
      {
        name: "Demo Signature Burger",
        description:
          "A juicy burger with fresh lettuce, tomato, cheese, and our special sauce.",
        price: 9.99,
        category: "Burgers",
        image: "https://via.placeholder.com/300x200?text=Demo+Burger",
        rating: 4.7,
        reviewCount: 24,
        isAvailable: true,
      },
      {
        name: "Demo Margherita Pizza",
        description:
          "Classic pizza topped with mozzarella, fresh basil, and tomato sauce.",
        price: 12.5,
        category: "Pizza",
        image: "https://via.placeholder.com/300x200?text=Demo+Pizza",
        rating: 4.9,
        reviewCount: 32,
        isAvailable: true,
      },
      {
        name: "Demo Caesar Salad",
        description:
          "Crisp romaine lettuce with parmesan, croutons, and creamy Caesar dressing.",
        price: 7.5,
        category: "Salads",
        image: "https://via.placeholder.com/300x200?text=Demo+Salad",
        rating: 4.5,
        reviewCount: 18,
        isAvailable: true,
      },
    ];

    for (const itemData of demoItems) {
      const existingItem = await MenuItem.findOne({
        restaurantId: restaurant._id,
        name: itemData.name,
      });
      if (!existingItem) {
        const menuItem = new MenuItem({
          restaurantId: restaurant._id,
          ...itemData,
        });
        await menuItem.save();
        console.log("Added demo menu item:", itemData.name);
      } else {
        console.log("Demo menu item already exists:", itemData.name);
      }
    }

    console.log("Demo restaurant data seeding completed.");
    process.exit();
  } catch (err) {
    console.error("Error seeding demo restaurant data:", err);
    process.exit(1);
  }
};

seedDemoRestaurant();
