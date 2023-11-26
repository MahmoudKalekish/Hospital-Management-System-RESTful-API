const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.authorizeUser = (req, res, next) => {
  const token = req.headers["x-admin-auth-token"];

  if (!token) {
    return res.status(401).json({ error: 'Authorization header missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

exports.checkAdmin = (req, res, next) => {
  const { role } = req.user;

  if (role !== 'admin') {
    return res.status(403).json({ error: 'Unauthorized. Only admins can perform this action.' });
  }
  next();
};

exports.authorizePatient = (req, res, next) => {
  const token = req.headers['x-auth-token'];

  if (!token) {
    return res.status(401).json({ error: 'Authorization header missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    
    if (decoded.role !== 'patient') {
      return res.status(403).json({ error: 'Unauthorized. Only patients can perform this action.' });
    }

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};