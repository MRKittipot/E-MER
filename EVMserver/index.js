const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config(); // to load the environment variables from .env file
const morgan = require('morgan'); //log check CRUD api 
const mongoose = require("mongoose")
const app = express();
const dbConnect  = require("./config/databaseconnector");
const authentication = require("./routes/authen")
const bodyParser = require("body-parser")

const port = process.env.PORT;

app.use(bodyParser.json()); //important part
app.use(bodyParser.urlencoded({ extended: false })); //important part
app.use(cors());
app.use(morgan('dev'))

app.use("/api/user",authentication)

dbConnect()

app.listen(port,() => {
    console.log('Server is running on');
    console.log("Port :", port);
    console.log("==================")
})