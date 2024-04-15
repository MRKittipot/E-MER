const usermodel = require("../../model/User");
const bcrypt = require('bcrypt')

const updatePassword = async(req,res) => {
    try{
        const userdataemail = req.body.Email;
        const newpassword = req.body.Password;

        const hashedpassword = await bcrypt.hash(newpassword , 10);

        const response = usermodel.findOne(userdataemail);
        if(response){
            console.log(response);
            const update = await usermodel.updateOne(
                {Email: userdataemail , 
                Password : hashedpassword})
            console.log("Update Password Successfully");
            res.status(200).send(update);
        }else{
            console.log("Fail to Update");
        }
    }catch(error){
        console.log(error);
    }
}

module.exports = updatePassword;