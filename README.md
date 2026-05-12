# Food Delivery System

A full-stack food delivery application built with **Angular**, **Node.js**, and **MongoDB**. The system includes three separate portals for **Admins**, **Customers**, and **Restaurants**.

## 🚀 Quick Start

```bash
# Terminal 1: Start Backend
cd server && npm run dev

# Terminal 2: Start Frontend
cd client && npm start

# Open browser: http://localhost:4200
```

For detailed setup instructions, see [SETUP.md](SETUP.md) or [QUICKSTART.md](QUICKSTART.md)

## Project Structure

```
Food delivery system/
├── server/                 # Node.js/Express backend
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API endpoints
│   ├── middleware/        # Authentication & validation
│   ├── server.js          # Main server file
│   └── package.json       # Backend dependencies
│
└── client/                # Angular frontend
    ├── src/
    │   ├── app/
    │   │   ├── components/       # Angular components
    │   │   ├── services/         # API services
    │   │   └── app.component.*
    │   └── index.html
    └── package.json       # Frontend dependencies
```

## Features

### Customer Portal
- Browse restaurants
- View menu items
- Add items to cart
- Place orders
- Track order status
- View order history

### Restaurant Portal
- Create/edit restaurant profile
- Manage menu items (add, edit, toggle availability)
- View incoming orders
- Update order status (pending → accepted → preparing → ready → delivered)
- Track order history

### Admin Portal
- View system statistics (users, restaurants, orders, revenue)
- Manage all users
- Approve/reject restaurants
- Monitor all orders
- View analytics

## Backend API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### Customer Routes
- `GET /api/customer/restaurants` - Get all active restaurants
- `GET /api/customer/restaurant/:id/menu` - Get restaurant menu
- `POST /api/customer/order` - Place new order
- `GET /api/customer/orders` - Get user's orders
- `GET /api/customer/order/:id` - Get order details

### Restaurant Routes
- `POST /api/restaurant/profile` - Create/update restaurant profile
- `GET /api/restaurant/profile` - Get restaurant profile
- `POST /api/restaurant/menu` - Add menu item
- `GET /api/restaurant/menu` - Get restaurant menu
- `PUT /api/restaurant/menu/:id` - Update menu item
- `GET /api/restaurant/orders` - Get restaurant orders
- `PUT /api/restaurant/order/:id/status` - Update order status

### Admin Routes
- `GET /api/admin/users` - Get all users
- `GET /api/admin/restaurants` - Get all restaurants
- `PUT /api/admin/restaurant/:id/status` - Update restaurant status
- `GET /api/admin/orders` - Get all orders
- `GET /api/admin/stats` - Get dashboard statistics

## Installation & Setup

See **[SETUP.md](SETUP.md)** for complete step-by-step installation and configuration instructions.

### Prerequisites
- Node.js (v14+)
- MongoDB (v4+) or MongoDB Atlas
- Angular CLI (recommended)

### Quick Backend Setup
```bash
cd server
npm install
# Create .env file (copy from .env.example)
npm run dev
```

### Quick Frontend Setup
```bash
cd client
npm install
npm start
```

## Models

### User
- name, email, password (hashed), role (admin/customer/restaurant)

### Restaurant
- userId, name, description, address, phone, image, rating, isActive

### MenuItem
- restaurantId, name, description, price, category, image, isAvailable

### Order
- customerId, restaurantId, items[], totalAmount, status, deliveryAddress, phone, notes

## User Roles & Access

### Customer
- Can view restaurants and menus
- Can place orders
- Can track order status
- Access: `/customer` portal

### Restaurant
- Can manage restaurant profile
- Can add/edit menu items
- Can view and manage orders
- Access: `/restaurant` portal

### Admin
- Can view all users, restaurants, and orders
- Can approve/reject restaurants
- Can view system statistics
- Access: `/admin` portal

## Order Status Flow
1. **Pending** - Order just placed
2. **Accepted** - Restaurant accepts the order
3. **Preparing** - Kitchen preparing the food
4. **Ready** - Food ready for pickup/delivery
5. **Delivered** - Order delivered to customer
6. **Cancelled** - Order cancelled

## Environment Variables

### Server (.env)
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/foodDelivery
JWT_SECRET=your_secret_key_here
```

### Client (environment.ts)
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api'
};
```

## Technologies Used

### Backend
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **cors** - Cross-origin requests

### Frontend
- **Angular 17** - Frontend framework
- **RxJS** - Reactive programming
- **TypeScript** - Typed JavaScript
- **Bootstrap/CSS** - Styling

## Future Enhancements

- Payment gateway integration (Stripe/PayPal)
- Real-time notifications (Socket.io)
- Email notifications
- Rating and reviews system
- Delivery tracking with map integration
- Admin analytics dashboard
- Mobile app (React Native)
- SMS notifications

## License

This project is open source and available under the MIT License.