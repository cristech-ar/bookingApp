const express  = require('express')
const router = express.Router();

const BookingController = require('../db/bookingStore');

router.get('/list', async (req,res)=>{
    const date = new Date().toISOString().slice(0,10);
    console.log(date);
    try {
        const bookings = await BookingController.getAllByDate(date);
        res.status(200).json(bookings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred" });
    }
});

module.exports = router;