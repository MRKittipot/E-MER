const usermodel = require('../../model/User');

const DeleteAccount = async(req,res) =>{
    try{
      const account = req.body.Email;
      
      const response = await usermodel.deleteOne({Email : account});
  
      res.send(response)
      console.log(response);
  
      getAccount;
    }
    catch(err){
      console.log(err);
      res.status(500).json({message:"Internal Server Error"});
    }
  }

module.exports = DeleteAccount;