const express = require("express");
const router = express.Router();
const {
    createAccount,
    getAccount,
    login,
    updateUserPhoto,
    updateUserinfo
} = require("../api/Userpart")

router.post("/Signup",createAccount);
router.get("/getuser",getAccount);
router.post("/Login",login);
router.post("/Updatephoto",updateUserPhoto);
router.post("/Updateuserinfo",updateUserinfo);

module.exports = router;