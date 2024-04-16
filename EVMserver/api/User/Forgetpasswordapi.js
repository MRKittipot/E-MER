const usermodel = require("../../model/User");
const bcrypt = require('bcrypt')

const updatePassword = async(req,res) => {
    try{
        const userdataemail = req.body.Email;
        const newpassword = req.body.Password;

        const hashedpassword = await bcrypt.hash(newpassword , 10);

        const response = await usermodel.findOne({Email:userdataemail});
        if(response){
            const update = await usermodel.findByIdAndUpdate(
                response._id,
                {Password : hashedpassword},
                {new : true}
            );
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