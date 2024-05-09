const ReservationModel = require("../../model/Reservation"); // Use camelCase for variable names
const express = require("express");
const router = express.Router();

const postReservation = async (req, res) => {
    try {
        const { typecharger, userName, uid } = req.body; // Extract typecharger from the request body
        const reservedata = { typecharger, userName , uid }; // Create an object with the typecharger field
        const bill = await ReservationModel.create(reservedata);
        res.status(200).send(bill);
    } catch (error) {
        res.status(500).json({ message: "Error Occurred", error: error.message });
    }
};

const getReservation = async (req, res) => {
    try {
        const billdata = await ReservationModel.find({uid:req.body.uid});
        if (billdata.length === 0) {
            return res.status(404).json({ message: "No data found" });
        } else {
            res.status(200).json(billdata);
        }
    } catch (error) {
        res.status(500).json({ message: "Error Occurred", error: error.message });
    }
};


const updatePriceReservation= async (req, res) => {
    try {
        const billdata = await ReservationModel.updateOne(
            {_id: req.body.orderId},
            {$set: {price: req.body.price,
                    energy: req.body.energy
            }},
          );
          console.log('Update Successfully');
          console.log(billdata)
          res.status(200).send(billdata);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error Occurred", error: error.message });
    }
};

module.exports = {
    postReservation,
    getReservation,
    updatePriceReservation
};