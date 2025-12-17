# Complete API Documentation - CLOTHESLINE E-Commerce

## 📚 Table of Contents
1. [Authentication Routes](#authentication-routes)
2. [Product Routes](#product-routes)
3. [Cart Routes](#cart-routes)
4. [Order Routes](#order-routes)
5. [User Management Routes](#user-management-routes)

---

## Authentication Routes
**Base URL:** `/api/auth`

### Register User
- **POST** `/api/auth/register`
- **Access:** Public
- **Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "customer",
  "storeName": "My Store" // Required only for vendors
}
```

### Login User
- **POST** `/api/auth/login`
- **Access:** Public
- **Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Get Current User
- **GET** `/api/auth/me`
- **Access:** Private
- **Headers:** `Authorization: Bearer <token>`

---

## Product Routes
**Base URL:** `/api/products`

### Get All Products
- **GET** `/api/products`
- **Access:** Public
- **Query Parameters:**
  - `category` - Filter by category
  - `minPrice` - Minimum price
  - `maxPrice` - Maximum price
  - `search` - Search in name and description
  - `sort` - Sort by (price_asc, price_desc, newest, name)

### Get Single Product
- **GET** `/api/products/:id`
- **Access:** Public

### Create Product
- **POST** `/api/products`
- **Access:** Private (Vendor/Admin)
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
```json
{
  "name": "Classic White Shirt",
  "description": "Premium cotton shirt",
  "price": 49.99,
  "category": "shirts",
  "stock": 100,
  "sizes": ["S", "M", "L", "XL"],
  "colors": ["White", "Black"],
  "images": ["https://example.com/image.jpg"]
}
```

### Update Product
- **PUT** `/api/products/:id`
- **Access:** Private (Vendor/Admin - Own products only)
- **Headers:** `Authorization: Bearer <token>`

### Delete Product
- **DELETE** `/api/products/:id`
- **Access:** Private (Vendor/Admin - Own products only)
- **Headers:** `Authorization: Bearer <token>`

---

## Cart Routes
**Base URL:** `/api/cart`

### Get User Cart
- **GET** `/api/cart`
- **Access:** Private
- **Headers:** `Authorization: Bearer <token>`

### Add Item to Cart
- **POST** `/api/cart`
- **Access:** Private
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
```json
{
  "productId": "product_id_here",
  "quantity": 2,
  "selectedSize": "M",
  "selectedColor": "Black"
}
```

### Update Cart Item
- **PUT** `/api/cart/:itemId`
- **Access:** Private
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
```json
{
  "quantity": 3
}
```

### Remove Item from Cart
- **DELETE** `/api/cart/:itemId`
- **Access:** Private
- **Headers:** `Authorization: Bearer <token>`

### Clear Cart
- **DELETE** `/api/cart`
- **Access:** Private
- **Headers:** `Authorization: Bearer <token>`

### Sync Cart
- **POST** `/api/cart/sync`
- **Access:** Private
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
```json
{
  "items": [
    {
      "productId": "product_id",
      "quantity": 2,
      "selectedSize": "M"
    }
  ]
}
```

---

## Order Routes
**Base URL:** `/api/orders`

### Get User Orders
- **GET** `/api/orders`
- **Access:** Private
- **Headers:** `Authorization: Bearer <token>`

### Get Single Order
- **GET** `/api/orders/:id`
- **Access:** Private (Own orders only)
- **Headers:** `Authorization: Bearer <token>`

### Create Order
- **POST** `/api/orders`
- **Access:** Private
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
```json
{
  "items": [
    {
      "productId": "product_id",
      "quantity": 2,
      "selectedSize": "M",
      "selectedColor": "Black"
    }
  ],
  "shippingAddress": {
    "fullName": "John Doe",
    "address": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "country": "United States",
    "phoneNumber": "+1234567890"
  },
  "paymentMethod": "credit_card",
  "subtotal": 99.98,
  "shippingCost": 10.00,
  "tax": 8.00,
  "discount": 0,
  "total": 117.98,
  "promoCode": "SAVE10",
  "notes": "Please deliver in the morning"
}
```

### Update Order Status
- **PUT** `/api/orders/:id/status`
- **Access:** Private (Admin/Vendor)
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
```json
{
  "orderStatus": "shipped",
  "trackingNumber": "TRACK123456"
}
```

### Cancel Order
- **PUT** `/api/orders/:id/cancel`
- **Access:** Private
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
```json
{
  "cancellationReason": "Changed my mind"
}
```

### Get Vendor Sales
- **GET** `/api/orders/vendor/sales`
- **Access:** Private (Vendor only)
- **Headers:** `Authorization: Bearer <token>`

### Get All Orders (Admin)
- **GET** `/api/orders/admin/all`
- **Access:** Private (Admin only)
- **Headers:** `Authorization: Bearer <token>`
- **Query Parameters:**
  - `status` - Filter by order status
  - `startDate` - Filter by start date
  - `endDate` - Filter by end date

---

## User Management Routes
**Base URL:** `/api/users`

### Get All Users
- **GET** `/api/users`
- **Access:** Private (Admin only)
- **Headers:** `Authorization: Bearer <token>`
- **Query Parameters:**
  - `role` - Filter by role (customer, vendor, admin)
  - `search` - Search by name, email, or store name
  - `isActive` - Filter by active status (true/false)

### Get Single User
- **GET** `/api/users/:id`
- **Access:** Private (Admin only)
- **Headers:** `Authorization: Bearer <token>`

### Update User
- **PUT** `/api/users/:id`
- **Access:** Private (Admin only)
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
```json
{
  "name": "John Doe",
  "email": "newemail@example.com",
  "role": "vendor",
  "isActive": true,
  "storeName": "My New Store"
}
```

### Delete User
- **DELETE** `/api/users/:id`
- **Access:** Private (Admin only)
- **Headers:** `Authorization: Bearer <token>`

### Toggle User Status
- **PUT** `/api/users/:id/toggle-status`
- **Access:** Private (Admin only)
- **Headers:** `Authorization: Bearer <token>`

### Get User Statistics
- **GET** `/api/users/stats/overview`
- **Access:** Private (Admin only)
- **Headers:** `Authorization: Bearer <token>`

### Get Current User Profile
- **GET** `/api/users/profile/me`
- **Access:** Private
- **Headers:** `Authorization: Bearer <token>`

### Update Current User Profile
- **PUT** `/api/users/profile/me`
- **Access:** Private
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "storeName": "My Store"
}
```

---

## Response Format

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {}
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error message",
  "errors": []
}
```

---

## Status Codes

- `200` - OK
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

---

## Order Status Values
- `pending` - Order placed, awaiting processing
- `processing` - Order being prepared
- `shipped` - Order shipped
- `delivered` - Order delivered
- `cancelled` - Order cancelled

## Payment Status Values
- `pending` - Payment pending
- `paid` - Payment successful
- `failed` - Payment failed
- `refunded` - Payment refunded

## Product Categories
- `shirts`
- `pants`
- `dresses`
- `outerwear`
- `accessories`
- `shoes`
- `activewear`
- `other`

---

## Notes
- All private routes require JWT token in Authorization header
- Tokens expire after 7 days
- Rate limit: 100 requests per 15 minutes
- All requests should use `Content-Type: application/json`