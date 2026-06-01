const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Notification = require("../models/Notification");

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  const { name, email, password, role, city } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
      address: city,
    });
    await user.save();
    res.status(201).json({ message: "User registered" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const SecurityLog = require("../models/SecurityLog");
const UserLog = require("../models/UserLog");

// Login
router.post("/login", async (req, res) => {
  const { email, password, portal } = req.body;
  const clientIp = req.ip || req.connection?.remoteAddress || "unknown";
  const userAgent = req.headers["user-agent"] || "unknown";

  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      if (
        portal === "admin" ||
        email?.toLowerCase().includes("admin") ||
        user?.role === "admin"
      ) {
        try {
          await SecurityLog.create({
            eventType: "FAILED_ADMIN_LOGIN",
            ipAddress: clientIp,
            userAgent,
            endpoint: req.originalUrl,
            method: req.method,
            attemptedCredentials: {
              email,
              role: user?.role || portal || "unknown",
            },
            severity: "high",
            details: `Failed login attempt on Admin Portal or admin account. IP: ${clientIp}`,
          });
        } catch (e) {
          console.error("Security log error", e);
        }
      }

      if (user) {
        user.loginAttempts = (user.loginAttempts || 0) + 1;
        await user.save();
        try {
          await UserLog.create({
            userId: user._id,
            email,
            action: "LOGIN_FAILED",
            ipAddress: clientIp,
            deviceInfo: userAgent,
            details: "Invalid password provided",
          });
        } catch (e) {
          console.error("User log error", e);
        }
      } else {
        try {
          await UserLog.create({
            email,
            action: "LOGIN_FAILED",
            ipAddress: clientIp,
            deviceInfo: userAgent,
            details: "Non-existent account email",
          });
        } catch (e) {
          console.error("User log error", e);
        }
      }

      return res.status(401).json({ error: "Invalid credentials" });
    }

    if (portal === "admin" && user.role !== "admin") {
      try {
        await SecurityLog.create({
          eventType: "UNAUTHORIZED_ADMIN_ACCESS",
          ipAddress: clientIp,
          userAgent,
          endpoint: req.originalUrl,
          method: req.method,
          attemptedCredentials: { email, role: user.role },
          severity: "high",
          details: `User with role '${user.role}' attempted to login to Admin Portal.`,
        });
      } catch (e) {
        console.error("Security log error", e);
      }
      return res
        .status(403)
        .json({ error: "Access denied. Administrator login only." });
    }

    // Check if new device / IP
    const existingDevice = user.loginDevices?.find(
      (d) => d.ipAddress === clientIp && d.userAgent === userAgent,
    );
    let isMultiDevice = false;
    if (!existingDevice) {
      if (user.loginDevices?.length > 0) isMultiDevice = true;
      user.loginDevices.push({
        ipAddress: clientIp,
        userAgent,
        lastLogin: new Date(),
      });
    } else {
      existingDevice.lastLogin = new Date();
    }

    user.lastLoginAt = new Date();
    user.loginAttempts = (user.loginAttempts || 0) + 1;
    await user.save();

    try {
      await UserLog.create({
        userId: user._id,
        email: user.email,
        action: isMultiDevice ? "MULTI_DEVICE_LOGIN" : "LOGIN_SUCCESS",
        ipAddress: clientIp,
        deviceInfo: userAgent,
        details: isMultiDevice
          ? "User logged in from a new IP/Device signature"
          : "Successful login",
      });
    } catch (e) {
      console.error("User log error", e);
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || "secret",
    );
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        phone: user.phone,
        address: user.address,
        city: user.city,
        savedAddresses: user.savedAddresses,
        cart: user.cart,
        profileImage: user.profileImage,
        createdAt: user.createdAt,
      },
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const auth = require("../middleware/auth");

// Get current user profile
router.get("/me", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update profile
router.put("/update-profile", auth, async (req, res) => {
  const { name, phone, address, city, profileImage, savedAddresses, cart } =
    req.body;
  try {
    const updateData = {};
    if (name !== undefined) updateData.name = name;
    if (phone !== undefined) updateData.phone = phone;
    if (address !== undefined) updateData.address = address;
    if (city !== undefined) updateData.city = city;
    if (profileImage !== undefined) updateData.profileImage = profileImage;
    if (savedAddresses !== undefined)
      updateData.savedAddresses = savedAddresses;
    if (cart !== undefined) updateData.cart = cart;
    const user = await User.findByIdAndUpdate(req.user.id, updateData, {
      new: true,
    }).select("-password");
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Sync user cart
router.put("/cart", auth, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { cart: req.body.cart },
      { new: true },
    ).select("-password");
    res.json(user.cart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Change Password
router.put("/change-password", auth, async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (!user || !(await bcrypt.compare(currentPassword, user.password))) {
      return res.status(401).json({ error: "Current password incorrect" });
    }
    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();
    res.json({ message: "Password updated successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const City = require("../models/City");

// Get Public Cities List
router.get("/cities", async (req, res) => {
  try {
    const cities = await City.find({ isActive: true });
    res.json(cities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const Category = require("../models/Category");

// Get Public Categories List
router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find({ isActive: true });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get User Notifications (Targeted & Broadcasts)
router.get("/notifications", auth, async (req, res) => {
  try {
    const notifications = await Notification.find({
      $or: [
        { recipientId: req.user.id },
        { recipientId: null, targetRole: { $in: ["all", req.user.role] } },
      ],
    }).sort({ createdAt: -1 });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Mark notification as read
router.put("/notifications/:id/read", auth, async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true },
    );
    res.json(notification);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
