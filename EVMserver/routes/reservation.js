const express = require("express");
const router = express.Router();

const {
    getReservation,
    postReservation
} = require("../api/Reservepart")

router.post("/savebill",postReservation);
router.post("/getbill",getReservation);

module.exports = router;