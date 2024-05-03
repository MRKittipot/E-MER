const express = require("express");
const router = express.Router();
const {
    updateUserPhoto,
    updateUserinfo,
} = require("../api/User/Userpart")
const createAccount = require("../api/User/Signupapi")
const getAccount = require("../api/User/Getuserapi");
const login = require("../api/User/Loginapi");
const DeleteUser = require("../api/User/Deleteaccountapi")
const updatePassword = require("../api/User/Forgetpasswordapi")

router.post("/Signup",createAccount);
router.post("/getuser",getAccount);
router.post("/Login",login);
router.post("/Updatephoto",updateUserPhoto);
router.post("/Updateuserinfo",updateUserinfo);
router.post("/DeleteUser",DeleteUser)
router.post("/Resetpass",updatePassword)

module.exports = router;