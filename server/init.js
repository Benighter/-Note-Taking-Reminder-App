const mongoose = require('mongoose');
const dbConfig = require('./config/db.config');

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Successfully connected to MongoDB');
}).catch(err => {
  console.error('Connection error', err);
  process.exit();
});
