
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer');
const usermodel = require("../../model/User");
const SendEmailResetPassword = async (req, res) => {
    try {
        console.log(req.body.email)
        const userdata = await usermodel.findOne({ Email: req.body.email }); 
        console.log(userdata)
        if(userdata != null) {
            console.log("check")
        const token =  jwt.sign({ Email: req.body.email },process.env.SECRET_KEY,{expiresIn: "15m"})
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'kmutthealthcareunit@gmail.com',
                pass: 'vqos ixxk pscf bqwm'
            }
        })
        const option = {
            from: 'kmutthealthcareunit@gmail.com',
            to: `${req.body.email}`,
            subject: `[Reset Password Emer]`,
            html: `
        
            <p style="margin-left: 20px; margin-bottom: 40px;">สามารถ reset รหัสผ่านได้ที่ http://localhost:3000/ResetPassword/${token}</p>
        `
        }
    
        transporter.sendMail(option, (err, info) => {
            if (err) {
                console.log('err', err)
                return res.status(200).json({
                    RespCode: 400,
                    RespMessage: 'bad',
                    RespError: err
                })
            }
            else {
                console.log('Send: ' + info.response)
                return res.status(200).json({
                    RespCode: 200,
                    RespMessage: 'good',
                })
            }
        })

        res.status(200).send("success");
        
    } else {
        console.log("check2")
        res.send("not found user");
    }
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Error in fetching data' });
    }
};

module.exports = SendEmailResetPassword;
