const usermodel = require("../../model/User");

const getAccount = async (req, res) => {
    try {
      const userdata = await usermodel.find();
      console.log('User :', userdata);
      res.status(200).send(userdata);
    } catch (error) {
      console.log(error);
      res.status(500).send({error: 'Error in fetching data'});
    }
  };

module.exports = getAccount