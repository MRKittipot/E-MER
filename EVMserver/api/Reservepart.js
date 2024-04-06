const Reservationmodel = require("../model/Reservation")

const postReservation = async(req,res) =>{
    try{
        const reservedata = req.body
        const bill = await Reservationmodel.create(reservedata)
        res.status(200).send("Save Successful :",bill)
    }catch(error){
        res.status(500).send("Error Occured : ", error)
    }
}; 

const getReservation = async (req,res) =>{
    try{
        const billdata = await Reservationmodel.find()
        if(!billdata) {
            return res.status(404).send("No data found")
        }else{
              res.status(200).json(billdata);
        }
    }catch(error){
        res.status(500).send(error);
    }
}

module.exports = {
    postReservation,
    getReservation
}