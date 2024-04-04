const mongoose = require("mongoose");

const dbConnect = () => {
  const connect = mongoose.connect(process.env.MONGO_URL);
  try{
    if(connect) {
      console.log("==================");
      console.log("Database is connected sucessfully");
      console.log("==================");
    }
  }catch(error){
    console.log("==================");
    console.log("Error :",error);
    console.log("==================");
  }
};

module.exports = dbConnect;