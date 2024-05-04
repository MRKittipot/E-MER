const usermodel = require("../../model/User");
const jwt = require("jsonwebtoken");

const checkResetToken = async (req, res) => {
    try {
        console.log(req.body.token)
        const decoded = await jwt.verify(req.body.token, process.env.SECRET_KEY);
        console.log(decoded);

        const userdata = await usermodel.findOne({ Email: decoded.Email }); 
        if(userdata) {
            console.log('User :', userdata);
            res.status(200).send(userdata);
        } else {
            res.send("not found user");
        }
        
    } catch (error) {
        console.log("check")
        res.send('not found user');
    }
};

module.exports = checkResetToken;
