const usermodel = require("../../model/User");

const Login = async (req,res) =>{
    try{
      const useremail = req.body.Email;
      const userpassword = req.body.Password;
      const checkstatus = await usermodel.find({Email : useremail,Password : userpassword })
      if(checkstatus.length > 0){ 
        console.log("=========================================");
        console.log("Login Complete");
        res.status(200).send(checkstatus)
      }else{
        console.log("User not found");
        res.status(401).send("User Not Found");
      }
    }catch(error){
      console.log(error);
      res.status(500).send("internal server error")
    }
  }

  module.exports = Login;