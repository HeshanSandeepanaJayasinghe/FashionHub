const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Protect middleware - verifies JWT and attaches user to req
async function protect(req, res, next) {
  try {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    }

    if (!token) {
      return res.status(401).json({ success: false, message: 'Not authorized, token missing' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');

    const user = await User.findById(decoded.id).select('-password');
    if (!user || !user.isActive) {
      return res.status(401).json({ success: false, message: 'Not authorized' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    return res.status(401).json({ success: false, message: 'Not authorized, token invalid' });
  }
}

// Role-based authorization middleware
function authorize(...roles) {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ success: false, message: 'Forbidden' });
    }
    next();
  };
}

// Placeholder ownership check - routes generally handle ownership checks inline
function checkOwnership() {
  return (req, res, next) => {
    // Implement resource-specific ownership checks in routes when needed
    next();
  };
}

module.exports = {
  protect,
  authorize,
  checkOwnership
};