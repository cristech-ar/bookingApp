const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://mongo:27017/bookings', {useNewUrlParser: true, useUnifiedTopology: true});
    console.log('Connection to MongoDB successful');
  } catch (err) {
    console.error('Failed to connect with MongoDB', err);
  }
};

module.exports = connectDB;
