
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  diners: Number,
  date: Date
});

module.exports = mongoose.model('Booking', BookingSchema);
