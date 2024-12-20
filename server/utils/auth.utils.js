const jwt = require('jsonwebtoken');

const secretKey = 'secretkey'; // TODO: replace with a secure secret key

const generateToken = (user) => {
  const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    return null;
  }
};

module.exports = { generateToken, verifyToken };
