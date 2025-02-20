
const jwt = require('jsonwebtoken');
const secretKey = require('../connection/jwtconfig');

function generateToken(user) {
  const payload = {
    id: user._id,
    email: user.email,
  };
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

module.exports = { generateToken };
