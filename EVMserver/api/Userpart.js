const { Collection } = require("mongoose");
const usermodel = require("../model/User");

//=================================================================================//

const createAccount = async (req, res) => {
  try {
    //const saltround = 10;
    /*const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(password, saltround, (err, hash) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        console.log("====================");
        console.log("Hash Password :", hash);
        resolve(hash);
      });
    });*/
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

//=================================================================================//

const getAccount = async (req,res) => {
    try{
        const user = await usermodel.find();
        console.log("User :",user);
        res.status(200).send("Send User Complete")
    }catch(error){
        console.log(error);
        res.status(500).send({error : "Error in fetching data"})
    }
}

//=================================================================================//

const login = async (req,res) =>{
  try{
    const useremail = req.body.Email;
    const userpassword = req.body.Password;
    const checkstatus = await usermodel.findOne({Email : useremail,Password : userpassword })
    if(checkstatus){
      console.log("=========================================");
      console.log("Login Complete");
      res.status(200).send('Login Successfully')
    }else{
      console.log("User not found");
    }
  }catch(error){
    console.log(error);
    res.status(500).send("internal server error")
  }
}

//=================================================================================//

const updateUserPhoto = async(req,res) =>{
  try{
    const newphoto = req.body.Photo
    await usermodel.updateOne(
      {_id:ObjectID(req.params.userId)}, // condition to update 
      {$set:{Photo:newphoto}} // part to update
    )
    res.status(200).send("Update Photo is successfully done.")
  }catch(error){
    console.log(error);
    res.status(400).send("Update Failed")
  }
}

//=================================================================================//

const updateUserinfo = async (req,res) =>{
  try{
    const newusername = req.body.Name;
    const newphonenumber = req.body.Phonenumber
    if(newusername){
      await usermodel.updateOne(
      {_id:ObjectID(req.params.userId)}, 
      {$set:{Name:newusername}}
    )
    console.log("Update Name Successfully");
    console.log("========================");
    res.status(200).send("Update Name Successfully")
  }
    if(newphonenumber){
      await usermodel.updateOne(
        {_id:ObjectID(req.params.userId)}, 
        {$set:{Phonenumber:newphonenumber}}
    )
    console.log("Update Phone Number Successfully");
    console.log("================================");
    res.status(200).send("Update Phone Number Successfully")
  }
  }catch(error){
    console.log(error);
    res.status(400).send("Both Update Fields are Required or Invalid Data Format!")
  }
}

//send data to check in mongodb

const SenddatatoMongodb = async (req,res)=>{
  try{
    const foundData = await usermodel.findOne(req.body.data);
    if(foundData){
      console.log("Data Found in MongoDB:",foundData);
      res.status(200).send(true);
    }else{
      console.log("Data Not Found in MongoDB");
      res.status(404).send(false);
    }
  }catch(error){
    console.log("Error inserting or finding data in MongoDB",error);
    res.status(500).send(false)
  }
};

module.exports = {
    getAccount,
    createAccount,
    login,
    updateUserPhoto,
    updateUserinfo,
    SenddatatoMongodb
};