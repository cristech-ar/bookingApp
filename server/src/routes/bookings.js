const express  = require('express')
const router = express.Router();

const BookingController = require('../db/bookingStore');

/**
 * @openapi
 * /list:
 *  get:
 *    summary: Use to request all bookings
 *    responses:
 *      '200':
 *        description: A successful response
 *      '500':
 *        description: An error occurred
 */
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