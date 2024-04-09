const express = require("express");
const router = express.Router();

const {
    getReservation,
    postReservation
} = require("../api/Reservepart")

router.post("/savebill",postReservation);
router.get("/getbill",getReservation);

module.exports = router; 