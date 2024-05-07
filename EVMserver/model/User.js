const mongoose = require("mongoose");
let userSchema = mongoose.Schema({
    EmerToken:{
        type:String
    },
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
    picurl : {
        type: String,
    },
    Phonenumber : {
        type: String,
        required:true
    }
})

const bcrypt = require('bcrypt');

const saltRounds = 10; 

userSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified('Password')) return next();
    
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(user.Password, salt);
        user.Password = hash;
        next();
    } catch (error) {
        return next(error);
    }
});

module.exports = mongoose.model("User", userSchema);

