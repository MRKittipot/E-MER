const mongoose = require('mongoose');

function getOrderNumber(min, max) {
    return Math.floor(Math.random() * (min - max + 1) + min)
}

function generateOrderNumber() {
    const randomOrder = getOrderNumber(1000, 9999)
    return `EVM${randomOrder}`
}

let ReservationSchema = mongoose.Schema({

    uid:{
        type:String,
        required:true
    },
    ordernumber: {
        type: String,
        required: true,
        default: generateOrderNumber
    },

    // carbrand:{
    //     type:String,
    //     required:true
    // },
    typecharger:{
        type:String,
        required:true
    },
    userName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    // location:{
    //     road:{
    //         type:String,
    //         required:true
    //     },
    //     subdistrict:{
    //         type:String,
    //         required:true
    //     },
    //     district:{
    //         type:String,
    //         required:true
    //     },

    // },
    // amount_to_pay:{
    //     amount:{
    //         type:Number,
    //         required:true
    //     },
    //     delivery:{
    //         type:Number,
    //         required:true
    //     },
    //     vat:{
    //         type:Number,
    //         required:true
    //     }

})

module.exports = mongoose.model("Reservation", ReservationSchema)