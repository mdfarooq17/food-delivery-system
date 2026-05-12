# Project Structure Guide

## Complete Project Layout

```
Food delivery system/
│
├── 📁 server/                          # Node.js/Express Backend
│   ├── 📁 models/                      # MongoDB Schemas
│   │   ├── User.js                     # User model (admin, customer, restaurant)
│   │   ├── Restaurant.js               # Restaurant profile model
│   │   ├── MenuItem.js                 # Menu items model
│   │   └── Order.js                    # Orders model
│   │
│   ├── 📁 routes/                      # API Routes
│   │   ├── auth.js                     # Authentication routes (register, login)
│   │   ├── admin.js                    # Admin routes (users, stats, restaurants)
│   │   ├── customer.js                 # Customer routes (restaurants, orders)
│   │   └── restaurant.js               # Restaurant routes (menu, profile, orders)
│   │
│   ├── 📁 middleware/                  # Express Middleware
│   │   └── auth.js                     # JWT authentication middleware
│   │
│   ├── server.js                       # Main server file
│   ├── package.json                    # Backend dependencies
│   ├── .env                            # Environment variables (local)
│   └── .env.example                    # Environment template
│
├── 📁 client/                          # Angular Frontend
│   ├── 📁 src/
│   │   ├── 📁 app/
│   │   │   ├── 📁 components/          # Reusable components
│   │   │   │   ├── login.component.ts/html/css
│   │   │   │   ├── register.component.ts/html/css
│   │   │   │   ├── auth.component.css
│   │   │   │   │
│   │   │   │   ├── 📁 customer/        # Customer portal
│   │   │   │   │   └── customer-dashboard.component.*
│   │   │   │   │
│   │   │   │   ├── 📁 restaurant/      # Restaurant portal
│   │   │   │   │   └── restaurant-dashboard.component.*
│   │   │   │   │
│   │   │   │   └── 📁 admin/           # Admin portal
│   │   │   │       └── admin-dashboard.component.*
│   │   │   │
│   │   │   ├── 📁 services/            # HTTP Services
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── customer.service.ts
│   │   │   │   ├── restaurant.service.ts
│   │   │   │   └── admin.service.ts
│   │   │   │
│   │   │   ├── app.component.*         # Main app component
│   │   │   ├── app.module.ts           # App module (declarations, imports)
│   │   │   └── app-routing.module.ts   # Routing configuration
│   │   │
│   │   ├── 📁 environments/            # Environment configs
│   │   │   ├── environment.ts          # Development
│   │   │   └── environment.prod.ts     # Production
│   │   │
│   │   ├── 📁 assets/                  # Static assets
│   │   ├── main.ts                     # Angular bootstrap file
│   │   ├── index.html                  # Main HTML file
│   │   ├── styles.css                  # Global styles
│   │   └── favicon.ico
│   │
│   ├── angular.json                    # Angular configuration
│   ├── tsconfig.json                   # TypeScript config
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   ├── package.json                    # Frontend dependencies
│   └── README.md
│
├── 📄 README.md                        # Project overview
├── 📄 SETUP.md                         # Detailed setup guide
├── 📄 QUICKSTART.md                    # Quick start guide
├── 📄 STRUCTURE.md                     # This file
├── 📄 package.json                     # Root package file
├── 📄 .gitignore                       # Git ignore rules
└── 📄 .git/                            # Git repository

```

## Key Files Explained

### Backend (server/)

| File | Purpose |
|------|---------|
| `server.js` | Starts Express server, connects MongoDB |
| `models/*.js` | Define database schemas using Mongoose |
| `routes/*.js` | Define API endpoints |
| `middleware/auth.js` | JWT verification for protected routes |
| `.env` | Database URI, JWT secret, port |

### Frontend (client/)

| File | Purpose |
|------|---------|
| `main.ts` | Bootstrap Angular app |
| `index.html` | Root HTML file |
| `app.module.ts` | Declare components and import modules |
| `app-routing.module.ts` | Define routes and navigation |
| `services/*.ts` | HTTP calls to backend API |
| `components/*/*.ts` | UI components and logic |

---

## Dependencies

### Backend (Node.js)
- **express** - Web framework
- **mongoose** - MongoDB ODM
- **cors** - Cross-origin requests
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT auth
- **dotenv** - Environment variables
- **nodemon** - Auto-reload during development

### Frontend (Angular)
- **@angular/core** - Core framework
- **@angular/common** - Common utilities
- **@angular/forms** - Form handling
- **@angular/router** - Routing
- **@angular/platform-browser** - Browser APIs
- **rxjs** - Reactive programming

---

## API Architecture

```
Client (Angular)
    ↓
HTTP Requests
    ↓
Backend (Express)
    ↓
Routes (auth, customer, restaurant, admin)
    ↓
Models (MongoDB)
    ↓
Database (MongoDB)
```

### Request Flow Example

1. **User Login**
   ```
   Login Component 
   → AuthService.login() 
   → POST /api/auth/login 
   → auth.js route handler 
   → User.findOne() 
   → Return JWT token 
   → Save to localStorage
   ```

2. **Get Restaurants**
   ```
   Customer Dashboard 
   → CustomerService.getRestaurants() 
   → GET /api/customer/restaurants 
   → customer.js route handler 
   → Restaurant.find() 
   → Return all restaurants
   ```

---

## Component Hierarchy

```
AppComponent (Root)
├── LoginComponent
├── RegisterComponent
└── [After Login - Based on Role]
    ├── CustomerDashboardComponent
    │   ├── Restaurant List
    │   ├── Menu Items
    │   └── Shopping Cart
    │
    ├── RestaurantDashboardComponent
    │   ├── Profile Management
    │   ├── Menu Management
    │   └── Order Management
    │
    └── AdminDashboardComponent
        ├── Dashboard Stats
        ├── User Management
        ├── Restaurant Management
        └── Order Monitoring
```

---

## Service Architecture

All services handle HTTP communication:

```typescript
// In any component
constructor(private customerService: CustomerService) {}

// Call service method
this.customerService.getRestaurants().subscribe(
  (data) => { /* Handle success */ },
  (error) => { /* Handle error */ }
);

// Service makes HTTP call to backend
getRestaurants(): Observable<any> {
  return this.http.get(`${this.apiUrl}/restaurants`);
}
```

---

## Database Schema

### User Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  role: 'admin' | 'customer' | 'restaurant',
  createdAt: Date
}
```

### Restaurant Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  name: String,
  description: String,
  address: String,
  phone: String,
  image: String,
  rating: Number,
  isActive: Boolean,
  createdAt: Date
}
```

### MenuItem Collection
```javascript
{
  _id: ObjectId,
  restaurantId: ObjectId (ref: Restaurant),
  name: String,
  description: String,
  price: Number,
  category: String,
  image: String,
  isAvailable: Boolean,
  createdAt: Date
}
```

### Order Collection
```javascript
{
  _id: ObjectId,
  customerId: ObjectId (ref: User),
  restaurantId: ObjectId (ref: Restaurant),
  items: [{
    menuItemId: ObjectId,
    name: String,
    price: Number,
    quantity: Number
  }],
  totalAmount: Number,
  status: 'pending' | 'accepted' | 'preparing' | 'ready' | 'delivered' | 'cancelled',
  deliveryAddress: String,
  phone: String,
  notes: String,
  createdAt: Date,
  updatedAt: Date
}
```

---

## Routing Map

### Frontend Routes (Angular Router)

| Route | Component | Access |
|-------|-----------|--------|
| `/login` | LoginComponent | Public |
| `/register` | RegisterComponent | Public |
| `/customer` | CustomerDashboardComponent | Customer only |
| `/restaurant` | RestaurantDashboardComponent | Restaurant only |
| `/admin` | AdminDashboardComponent | Admin only |
| `/` | Redirect to `/login` | Public |

### Backend Routes (Express)

| Method | Endpoint | Auth Required |
|--------|----------|---------------|
| POST | `/api/auth/register` | No |
| POST | `/api/auth/login` | No |
| GET | `/api/customer/restaurants` | No |
| GET | `/api/customer/restaurant/:id/menu` | No |
| POST | `/api/customer/order` | Yes |
| GET | `/api/customer/orders` | Yes |
| GET | `/api/admin/stats` | Yes (Admin) |
| GET | `/api/restaurant/profile` | Yes (Restaurant) |

---

## Environment Configuration

### Development (.env)
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/foodDelivery
JWT_SECRET=dev_secret_key_12345
```

### Production (.env)
```env
PORT=3000
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/foodDelivery
JWT_SECRET=prod_secret_key_super_secure_change_me
```

---

## File Naming Conventions

- **Components**: `*.component.ts`, `*.component.html`, `*.component.css`
- **Services**: `*.service.ts`
- **Models**: `*.js` (Mongoose models)
- **Routes**: `*.js` (Express routes)

---

## Development Workflow

1. **Create API in Backend**
   - Add route in `routes/`
   - Connect to database via `models/`

2. **Consume in Frontend**
   - Create/update service in `services/`
   - Use service in component

3. **Test**
   - Use Postman for API
   - Use browser DevTools for frontend

4. **Commit & Push**
   ```bash
   git add .
   git commit -m "Feature description"
   git push origin main
   ```

---

For setup instructions, see [SETUP.md](SETUP.md)
