const mongoose = require('mongoose');

let ReservationSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ordernumber:{
        type:String,
        required:true
    },
    carbrand:{
        type:String,
        required:true
    },
    typecharger:{
        type:String,
        required:true
    },
    location:{
        road:{
            type:String,
            required:true
        },
        subdistrict:{
            type:String,
            required:true
        },
        district:{
            type:String,
            required:true
        },
        
    },
    amount_to_pay:{
        amount:{
            type:Number,
            required:true
        },
        delivery:{
            type:Number,
            required:true
        },
        vat:{
            type:Number,
            required:true
        }
    },
})

module.exports = mongoose.model("Reservation",ReservationSchema)