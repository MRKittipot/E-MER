const usermodel = require("../../model/User");

const createAccount = async (req, res) => {
    try {
      const email = req.body.Email;
      const checkuser = await usermodel.findOne({ Email: email });
      if(!checkuser){
          const user = req.body;
          const newuser = await usermodel.create(user);
          res.send(newuser);
      }else{
          console.log("User is already exist");
          res.status(400).send("User Already Exist!");
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };



module.exports = createAccount;
  