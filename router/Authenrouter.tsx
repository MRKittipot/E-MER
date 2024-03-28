import axios from "axios";
import { useState, useEffect } from "react";

const [data,setdata] = useState({});

const fetchadddata = async (req,res) => {
    try{
        const req = await axios.post("http://localhost:5000/api/user/Signup");
        setdata(req);
        console.log(data);
        res.status(200).send("Successfully Done");
    }catch(error){
        console.log(error);
        res.status(400).send("Error in Sending data");
    }
}

//fetch data but doesn't use

const fetchdata = async (req,res) =>{
    try{
        let filterData = data.filter((item)=>{
            return item.id == parseInt(req.params.id);
        });
        if(filterData.length >  0 )
        {
           res.json(filterData[0]);  
        }else{
            res.status(404).send("No Data Found")  
        }
    }catch(error){
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}