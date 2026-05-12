# Food Delivery System - Setup & Running Guide

## Prerequisites

Before starting, make sure you have the following installed:

1. **Node.js** (v14 or higher)
   - Download from: https://nodejs.org/
   - Verify: `node --version` and `npm --version`

2. **MongoDB** (v4 or higher)
   - Download from: https://www.mongodb.com/try/download/community
   - Or use MongoDB Atlas (cloud): https://www.mongodb.com/cloud/atlas

3. **Angular CLI** (optional but recommended)
   ```bash
   npm install -g @angular/cli
   ```

4. **Git**
   - Download from: https://git-scm.com/

---

## Project Setup

### Step 1: Clone or Navigate to Project

```bash
cd "d:\Food delivery system"
```

---

## Backend Setup (Node.js/Express)

### Step 1: Install Backend Dependencies

```bash
cd server
npm install
```

### Step 2: Configure Environment Variables

Create a `.env` file in the `server` directory:

```bash
cp .env.example .env
```

Edit the `.env` file and update:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/foodDelivery
JWT_SECRET=your_secret_key_change_this_in_production
```

**Options for MongoDB:**

**Option A: Local MongoDB**
- Install MongoDB Community Edition
- Start MongoDB service
- Connection string: `mongodb://localhost:27017/foodDelivery`

**Option B: MongoDB Atlas (Cloud)**
- Create account at https://www.mongodb.com/cloud/atlas
- Create a cluster
- Get connection string
- Update MONGO_URI in .env

Example:
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/foodDelivery?retryWrites=true&w=majority
```

### Step 3: Start Backend Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

Expected output:
```
Server running on port 5000
MongoDB connected
```

The backend API will be available at: `http://localhost:5000`

---

## Frontend Setup (Angular)

### Step 1: Navigate to Client Directory

```bash
cd ../client
```

### Step 2: Install Frontend Dependencies

```bash
npm install
```

This may take a few minutes as Angular has many dependencies.

### Step 3: Start Frontend Development Server

```bash
npm start
```

Or alternatively:
```bash
ng serve
```

Wait for the compilation to complete. You should see:
```
✔ Compiled successfully.
Application bundle generated successfully.
```

### Step 4: Access the Application

Open your browser and navigate to:
```
http://localhost:4200
```

---

## Running the Complete Application

### Terminal 1: Start Backend

```bash
cd server
npm run dev
```

Wait for: `Server running on port 5000`

### Terminal 2: Start Frontend

```bash
cd client
npm start
```

Wait for: `Compiled successfully`

### Terminal 3 (Optional): MongoDB Compass

If using local MongoDB, you can use MongoDB Compass to view data:
- Download: https://www.mongodb.com/products/compass
- Connection: `mongodb://localhost:27017`

---

## Test User Credentials

After the application starts, you can create test accounts or use these credentials:

### For Testing:

1. **Register** a new account:
   - Go to http://localhost:4200/register
   - Create accounts for each role: Customer, Restaurant, Admin

2. **Admin Account** (manual creation in MongoDB):
   ```javascript
   db.users.insertOne({
     name: "Admin User",
     email: "admin@test.com",
     password: "$2a$10/..." // bcrypt hashed password
     role: "admin"
   })
   ```

---

## Application Features

### Customer Portal
- Access: `http://localhost:4200/login` → Login as Customer
- Browse restaurants
- View menus
- Place orders
- Track order status

### Restaurant Portal
- Access: `http://localhost:4200/login` → Login as Restaurant
- Manage restaurant profile
- Add/edit menu items
- View and manage orders
- Update order status

### Admin Portal
- Access: `http://localhost:4200/login` → Login as Admin
- View system statistics
- Manage users and restaurants
- Monitor all orders

---

## API Endpoints

All API endpoints are prefixed with `http://localhost:5000/api`

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - User login

### Customer Routes
- `GET /customer/restaurants` - Get all restaurants
- `GET /customer/restaurant/:id/menu` - Get menu items
- `POST /customer/order` - Place order
- `GET /customer/orders` - Get user orders

### Restaurant Routes
- `POST /restaurant/profile` - Create/update profile
- `GET /restaurant/profile` - Get profile
- `POST /restaurant/menu` - Add menu item
- `GET /restaurant/menu` - Get menu
- `PUT /restaurant/menu/:id` - Update menu item
- `GET /restaurant/orders` - Get orders
- `PUT /restaurant/order/:id/status` - Update order status

### Admin Routes
- `GET /admin/users` - Get all users
- `GET /admin/restaurants` - Get all restaurants
- `PUT /admin/restaurant/:id/status` - Update restaurant status
- `GET /admin/orders` - Get all orders
- `GET /admin/stats` - Get dashboard statistics

---

## Common Issues & Solutions

### Issue 1: MongoDB Connection Error
```
Error: MongooseError: Cannot connect to MongoDB
```

**Solution:**
- Ensure MongoDB service is running
- Check MONGO_URI in .env file
- For MongoDB Atlas, ensure IP address is whitelisted

### Issue 2: Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::5000
```

**Solution:**
- Kill the process using the port:
  ```bash
  # Windows
  netstat -ano | findstr :5000
  taskkill /PID <PID> /F
  
  # Mac/Linux
  lsof -ti:5000 | xargs kill -9
  ```

### Issue 3: CORS Error
```
Access to XMLHttpRequest blocked by CORS policy
```

**Solution:**
- Ensure backend is running on port 5000
- Check environment API URL: should be `http://localhost:5000/api`

### Issue 4: npm Install Fails
```
Error: npm ERR! code ERESOLVE
```

**Solution:**
```bash
npm install --legacy-peer-deps
```

### Issue 5: Angular Port Already in Use
```
Error: Port 4200 is already in use
```

**Solution:**
```bash
# Use different port
ng serve --port 4201
```

---

## Production Deployment

### Build for Production

```bash
cd client
ng build --configuration production
```

This creates optimized files in `dist/food-delivery-client/`

### Deploy Frontend
- Upload `dist/` folder to hosting service (Netlify, Vercel, AWS S3)
- Configure base href if deployed to subdirectory

### Deploy Backend
- Use Node hosting (Heroku, AWS, DigitalOcean, Replit)
- Set production environment variables
- Use production MongoDB Atlas connection

---

## Useful Commands

### Backend
```bash
npm start                 # Start server
npm run dev              # Start with auto-reload
npm test                 # Run tests (if configured)
```

### Frontend
```bash
npm start                # Start dev server
ng serve                 # Alternative start command
ng build                 # Build for production
ng test                  # Run tests
ng lint                  # Check code quality
```

### Git
```bash
git add .                # Stage changes
git commit -m "message"  # Commit changes
git push origin main     # Push to GitHub
```

---

## Next Steps

1. ✅ Install dependencies
2. ✅ Start MongoDB
3. ✅ Start backend server
4. ✅ Start frontend development server
5. ✅ Register and test the application
6. 📝 Customize branding and colors
7. 🔐 Implement payment gateway
8. 📱 Add mobile app support
9. 📊 Add advanced analytics
10. 🚀 Deploy to production

---

## Support & Resources

- Angular Documentation: https://angular.io/docs
- Express.js Guide: https://expressjs.com/
- MongoDB Manual: https://docs.mongodb.com/manual/
- RxJS Guide: https://rxjs.dev/

---

## License

This project is open source and available under the MIT License.
