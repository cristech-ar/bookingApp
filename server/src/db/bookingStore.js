const Booking = require('../db/models/booking');

class BookingController {
    async getAllByDate(date) {
        const allBookings = await Booking.find({date: date});
        return allBookings;
    }

    async getOne(id) {
        const booking = await Booking.findById(id);
        return booking;
    }

    async create(bookingData) {
        const newBooking = new Booking(bookingData);
        await newBooking.save();
        return newBooking;
    }

    async update(id, bookingData) {
        const updatedBooking = await Booking.findByIdAndUpdate(id, bookingData, { new: true });
        return updatedBooking;
    }

    async delete(id) {
        const deletedBooking = await Booking.findByIdAndDelete(id);
        return deletedBooking;
    }
}

module.exports = new BookingController();
