const express = require("express");
const router = express.Router();

const {
    getReservation,
    postReservation
} = require("../api/Reservation/Reservepart")

const getCard = require("../api/Reservation/Getcard")

router.post("/savebill",postReservation);
router.get("/getbill",getReservation);
router.get("/card/:id",getCard)

module.exports = router; 