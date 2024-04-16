const ReservationModel = require("../../model/Reservation"); // Use camelCase for variable names
const express = require("express");
const router = express.Router();

const postReservation = async (req, res) => {
    try {
        const { typecharger } = req.body; // Extract typecharger from the request body
        const reservedata = { typecharger }; // Create an object with the typecharger field
        const bill = await ReservationModel.create(reservedata);
        res.status(200).json({ message: "Save Successful", data: bill });
    } catch (error) {
        res.status(500).json({ message: "Error Occurred", error: error.message });
    }
};

const getReservation = async (req, res) => {
    try {
        const billdata = await ReservationModel.find();
        if (billdata.length === 0) {
            return res.status(404).json({ message: "No data found" });
        } else {
            res.status(200).json(billdata);
        }
    } catch (error) {
        res.status(500).json({ message: "Error Occurred", error: error.message });
    }
};

module.exports = {
    postReservation,
    getReservation
};
