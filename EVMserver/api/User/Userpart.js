const usermodel = require('../../model/User');

//=================================================================================//

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

//=================================================================================//


const updateUserPhoto = async (req, res) => {
  try {
    const newphoto = req.body.Photo;
    await usermodel.updateOne(
      {_id: ObjectID(req.params.userId)}, // condition to update
      {$set: {Photo: newphoto}}, // part to update
    );
    res.status(200).send('Update Photo is successfully done.');
  } catch (error) {
    console.log(error);
    res.status(400).send('Update Failed');
  }
};

//=================================================================================//

const updateUserinfo = async (req, res) => {
  try {
    const newusername = req.body.Name;
    const newphonenumber = req.body.Phonenumber;
    if (newusername) {
      await usermodel.updateOne(
        {_id: ObjectID(req.params.userId)},
        {$set: {Name: newusername}},
      );
      console.log('Update Name Successfully');
      console.log('========================');
      res.status(200).send('Update Name Successfully');
    }
    if (newphonenumber) {
      await usermodel.updateOne(
        {_id: ObjectID(req.params.userId)},
        {$set: {Phonenumber: newphonenumber}},
      );
      console.log('Update Phone Number Successfully');
      console.log('================================');
      res.status(200).send('Update Phone Number Successfully');
    }
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send('Both Update Fields are Required or Invalid Data Format!');
  }
};

//send data to check in mongodb

const SenddatatoMongodb = async (req, res) => {
  try {
    const foundData = await usermodel.findOne(req.body.data);
    if (foundData) {
      console.log('Data Found in MongoDB:', foundData);
      res.status(200).send(true);
    } else {
      console.log('Data Not Found in MongoDB');
      res.status(404).send(false);
    }
  } catch (error) {
    console.log('Error inserting or finding data in MongoDB', error);
    res.status(500).send(false);
  }
};


module.exports = {
  updateUserPhoto,
  updateUserinfo,
  SenddatatoMongodb,
};
