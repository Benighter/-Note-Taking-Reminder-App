const { Pool } = require('pg');
const pool = require('./config/db.config');

pool.query('SELECT * FROM users', (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.rows);
  }
});

pool.end();
