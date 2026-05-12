# 🚀 Quick Start Guide

## One-Time Setup (First Time Only)

### 1. Install Node.js & MongoDB
- **Node.js**: https://nodejs.org/ (v14+)
- **MongoDB**: https://www.mongodb.com/try/download/community (or use MongoDB Atlas)

### 2. Clone Project
```bash
git clone https://github.com/mdfarooq17/food-delivery-system.git
cd "food delivery system"
```

### 3. Install Dependencies

**Backend:**
```bash
cd server
npm install
```

**Frontend:**
```bash
cd ../client
npm install
```

---

## Running the Application

### Start in 2 Terminal Windows:

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```
✅ Wait for: `Server running on port 5000`

**Terminal 2 - Frontend:**
```bash
cd client
npm start
```
✅ Wait for: `Compiled successfully`

**Then Open:** http://localhost:4200

---

## Test the App

### 1. Register
- Click "Register here" link
- Fill in details
- Select role: **Customer**, **Restaurant**, or **Admin**
- Click Register

### 2. Login
- Use your registered email and password
- You'll be redirected to your portal

### 3. Test Features

**As Customer:**
- Browse restaurants
- Add items to cart
- Place orders

**As Restaurant:**
- Set up restaurant profile
- Add menu items
- Manage incoming orders

**As Admin:**
- View dashboard statistics
- Manage restaurants and users
- Monitor all orders

---

## Database Setup

### Option 1: Local MongoDB (Recommended for Development)

**Windows:**
1. Download MongoDB Community
2. Install with default settings
3. MongoDB starts automatically
4. Use connection string: `mongodb://localhost:27017/foodDelivery`

**Mac/Linux:**
```bash
brew install mongodb-community
brew services start mongodb-community
```

### Option 2: MongoDB Atlas (Cloud)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create cluster
4. Get connection string
5. Update `.env` file with your connection string

Example:
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/foodDelivery
```

---

## Common Commands

```bash
# Backend
npm run dev              # Start with auto-reload
npm start               # Start normally
npm test                # Run tests

# Frontend
npm start               # Start dev server
ng build               # Build for production
ng serve --port 4201   # Run on different port

# Database
# MongoDB Compass to view data visually
```

---

## Stop the Application

**Ctrl + C** in each terminal

---

## Troubleshooting

**Backend won't start?**
- Check if MongoDB is running
- Check if port 5000 is available
- Check `.env` file configuration

**Frontend won't compile?**
- Delete `node_modules` folder
- Run `npm install --legacy-peer-deps`
- Try different port: `ng serve --port 4201`

**Can't login?**
- Register first
- Check email and password
- Look at browser console for errors (F12)

---

## Next Steps

1. ✅ Run the application
2. Create test accounts
3. Test all features
4. Customize branding (colors, logo)
5. Add payment integration
6. Deploy to production

---

For detailed setup: See [SETUP.md](SETUP.md)
