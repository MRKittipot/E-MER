const express = require("express");
const router = express.Router()
const {
    createAccount,
    getAccount,
    login,
    updateUserPhoto,
    updateUserinfo
} = require("../api/Userauthen")

router.post("/Signup",createAccount);
router.get("/getuser",getAccount);
router.post("/Login",login)
router.post("/Updatephoto",updateUserPhoto)

module.exports = router;