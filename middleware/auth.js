let jwt = require("jsonwebtoken")


let tokenVerify = (req, res, next) => {
    try {
        let token = req.headers.authorization.split(" ")[1]
        // console.log(token);

        if (!token) {
            return res.status(401).json({ message: "token is unauthoriz" })
        }

        let admin = jwt.verify(token, process.env.KEY)

        req.admin = admin.admin;
        next()

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}



module.exports = { tokenVerify }