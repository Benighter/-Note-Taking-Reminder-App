const pool = require('../config/db.config');

const getUser = (username) => {
  return pool.query('SELECT * FROM users WHERE username = $1', [username]);
};

const createUser = (username, password) => {
  return pool.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', [username, password]);
};

module.exports = { getUser, createUser };
