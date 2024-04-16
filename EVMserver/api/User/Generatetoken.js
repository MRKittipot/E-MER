const jwt = require("jsonwebtoken");

const generateToken = (req) => {
    return jwt.sign({ id: req },process.env.SECRET_KEY,{expiresIn: "2w"})
}

module.exports = generateToken;