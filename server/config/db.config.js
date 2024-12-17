const { Pool } = require('pg');

const dbConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'login',
  password: '1234',
  port: 5432,
};

const pool = new Pool(dbConfig);

module.exports = pool;
