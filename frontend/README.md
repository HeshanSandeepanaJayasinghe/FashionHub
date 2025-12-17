# CLOTHESLINE E-Commerce Platform

A full-stack MERN (MongoDB, Express, React, Node.js) e-commerce platform for clothing with role-based access control for Customers, Vendors, and Admins.

## 🎨 Design Theme
Black, Gray, and White color spectrum with modern, minimalist aesthetics.

## 📁 Project Structure

```
clothesline-ecommerce/
│
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js (to be created)
│   │   └── Cart.js (to be created)
│   │
│   ├── routes/
│   │   ├── auth.js
│   │   ├── products.js
│   │   ├── cart.js (to be created)
│   │   ├── orders.js (to be created)
│   │   └── users.js (to be created)
│   │
│   ├── middleware/
│   │   └── auth.js
│   │
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── Footer.jsx
    │   │   ├── ItemCard.jsx
    │   │   └── Hero.jsx
    │   │
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Products.jsx
    │   │   ├── Cart.jsx
    │   │   ├── Login.jsx
    │   │   ├── CustomerDashboard.jsx
    │   │   ├── VendorDashboard.jsx
    │   │   └── AdminDashboard.jsx
    │   │
    │   ├── context/
    │   │   ├── AuthContext.jsx
    │   │   └── CartContext.jsx
    │   │
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    │
    ├── public/
    │   └── (images and assets)
    │
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    └── postcss.config.js
```

## 🚀 Features

### Security
- ✅ JWT Authentication
- ✅ Password hashing with bcrypt (12 salt rounds)
- ✅ Input sanitization (XSS, NoSQL injection prevention)
- ✅ Rate limiting (100 requests per 15 minutes)
- ✅ Helmet.js for HTTP headers security
- ✅ Email validation
- ✅ Role-based access control (RBAC)

### User Roles

#### 👤 Customer
- Browse and search products
- Filter by category, price
- Add items to cart
- Checkout and place orders
- View order history
- Manage profile and addresses
- Wishlist functionality

#### 🏪 Vendor
- Create and manage products
- View sales analytics
- Track inventory
- Update product details
- View revenue statistics

#### 👨‍💼 Admin
- Manage all users (activate/deactivate/delete)
- View all products across vendors
- Platform-wide analytics
- Oversee system operations

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Context API** - State management
- **Vite** - Build tool

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **express-validator** - Input validation
- **helmet** - Security headers
- **express-rate-limit** - Rate limiting
- **cors** - Cross-origin resource sharing

## 📦 Installation

### Backend Setup

```bash
cd backend
npm install

# Create .env file
touch .env
```

Add to `.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_super_secret_jwt_key_change_this
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

Start backend:
```bash
npm start
```

### Frontend Setup

```bash
cd frontend
npm install

# Start development server
npm run dev
```

Frontend will run on `http://localhost:5173`

## 🔧 Configuration Files Needed

### frontend/vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
})
```

### frontend/tailwind.config.js
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#000000',
        'dark-card': '#1a1a1a',
        'dark-border': '#333333',
      }
    },
  },
  plugins: [],
}
```

### frontend/postcss.config.js
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Products
- `GET /api/products` - Get all products (with filters)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (vendor/admin only)
- `PUT /api/products/:id` - Update product (vendor/admin only)
- `DELETE /api/products/:id` - Delete product (vendor/admin only)

### Cart (To be implemented)
- `GET /api/cart` - Get user cart
- `POST /api/cart` - Add to cart
- `PUT /api/cart/:id` - Update cart item
- `DELETE /api/cart/:id` - Remove from cart

### Orders (To be implemented)
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order details

### Users (Admin only - To be implemented)
- `GET /api/users` - Get all users
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## 🎯 Next Steps

1. **Complete Backend Routes:**
   - Cart management
   - Order processing
   - User management (admin)

2. **Add Models:**
   - Order model
   - Cart model (optional - can use in-memory)

3. **Payment Integration:**
   - Stripe or PayPal integration
   - Checkout flow

4. **File Upload:**
   - Product image upload
   - User avatar upload
   - Cloudinary or AWS S3 integration

5. **Additional Features:**
   - Email notifications
   - Order tracking
   - Product reviews and ratings
   - Advanced search with filters
   - Wishlist persistence

6. **Testing:**
   - Unit tests
   - Integration tests
   - E2E tests

7. **Deployment:**
   - Backend: Heroku, Railway, or DigitalOcean
   - Frontend: Vercel or Netlify
   - Database: MongoDB Atlas

## 📝 Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret_key
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

## 🤝 Contributing

This is a starter template. Feel free to customize and extend based on your requirements.

## 📄 License

MIT License - feel free to use this project for learning or commercial purposes.

---

**Built with ❤️ using the MERN Stack**