const usermodel = require("../../model/User");

const updateUserImg = async (req, res) => {
    try {
        await usermodel.updateOne(
          {_id: req.body.userId},
          {$set: {picurl: req.body.picurl}},
        );
        console.log('Update Phone Number Successfully');
        console.log('================================');
        res.status(200).send('Update Phone Number Successfully');
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .send('Both Update Fields are Required or Invalid Data Format!');
    }
};

module.exports = updateUserImg;
