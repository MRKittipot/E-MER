const usermodel = require("../../model/User");
const generateToken = require("../User/Generatetoken")
const bcrypt = require('bcrypt');

// ใช้ bcrypt.compare() เพื่อเปรียบเทียบรหัสผ่านที่ป้อนเข้ามากับรหัสผ่านที่ถูก hash เก็บไว้
const Login = async (req, res) => {
    try {
        const useremail = req.body.Email;
        const userpassword = req.body.Password;
        const user = await usermodel.findOne({ Email: useremail });

        if (user) {
            // เปรียบเทียบรหัสผ่านที่ป้อนเข้ามากับรหัสผ่านที่ถูก hash
            const isPasswordMatch = await bcrypt.compare(userpassword, user.Password);
            if (isPasswordMatch) {
                // รหัสผ่านถูกต้อง
                const token = generateToken(user._id);
                const updateuser = await usermodel.findByIdAndUpdate(
                    user._id,
                    { EmerToken: token },
                    { new: true }
                );
                console.log("=========================================");
                console.log("Login Complete");
                res.status(200).send(user);
            } else {
                // รหัสผ่านไม่ถูกต้อง
                console.log("Incorrect password");
                res.send("Incorrect password");
            }
        } else {
            // ไม่พบผู้ใช้
            console.log("User not found");
            res.send("User Not Found");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("internal server error");
    }
};

module.exports = Login;