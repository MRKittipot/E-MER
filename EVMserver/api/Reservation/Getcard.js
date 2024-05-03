const Reservation = require("../../model/Reservation");
const express = require("express");
const router = express.Router();

const getCard = async (req,res) => {
    try{
        const id = req.params
        const cardData = await Reservation.find({id:id});
        if (cardData.length != 0){
            console.log(cardData);
            res.status(201).json(cardData[0].card);
        }else{
            throw new Error('No data found');
        }
    }catch(error){
        console.log(error);
    }
}

module.exports = getCard

