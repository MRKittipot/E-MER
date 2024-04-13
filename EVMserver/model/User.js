const mongoose = require("mongoose");
let userSchema = mongoose.Schema({
    Name : {
        type:String,
        required:true
    },
    Email : {
        type:String,
        required:true
    },
    Password : {
        type:String,
        required:true
    },
    Sex : {
        type: String,
        required: true
    },
    DateofBirth : {
        type: String,
        required: true
    },
    Photo : {
        type: String,
        required: false         
    },
    Phonenumber : {
        type: String,
        required: true
    },
    PhotoURL : {
        type : String,
        required: true
    }
})

module.exports = mongoose.model("User",userSchema)