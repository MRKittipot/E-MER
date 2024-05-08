const express = require("express");
const router = express.Router();

const {
    getReservation,
    postReservation,
    updatePriceReservation
} = require("../api/Reservation/Reservepart")

const getCard = require("../api/Reservation/Getcard")

router.post("/savebill",postReservation);
router.post("/getbill",getReservation);
router.get("/card/:id",getCard)
router.post("/updateBill",updatePriceReservation);

module.exports = router; 