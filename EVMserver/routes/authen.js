const express = require("express");
const router = express.Router();
const {
    updateUserPhoto,
    updateUserinfo,
} = require("../api/Userpart")
const createAccount = require("../api/User/Signupapi")
const getAccount = require("../api/User/Getuserapi");
const login = require("../api/User/Loginapi");
const DeleteUser = require("../api/User/Deleteaccountapi")

router.post("/Signup",createAccount);
router.get("/getuser",getAccount);
router.post("/Login",login);
router.post("/Updatephoto",updateUserPhoto);
router.post("/Updateuserinfo",updateUserinfo);
router.post("/DeleteUser",DeleteUser)

module.exports = router;