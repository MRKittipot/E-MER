const usermodel = require("../../model/User");
const jwt = require("jsonwebtoken");

const getAccount = async (req, res) => {
    try {
        const decoded = await jwt.verify(req.body.uid, process.env.SECRET_KEY);

        console.log(decoded.id,"decoded");

        const userdata = await usermodel.findOne({ _id: decoded.id }); 
        console.log('User :', userdata);
        res.status(200).send(userdata);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Error in fetching data' });
    }
};

module.exports = getAccount;
