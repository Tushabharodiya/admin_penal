const Admin = require("../models/admin.models");
let jwt = require("jsonwebtoken")

let adminRegister = async (req, res) => {
    try {
        let body = req.body;
        let { name, email, password, confirmPassword } = req.body;

        if (name == " " || email == " " || password == " " || confirmPassword == " ") {
            return res.status(401).json({ error: "all fileds are reqired" })
        }
        if (password !== confirmPassword) {
            return res.status(401).json({ error: "password invalid" })
        }

        let findAdmin = await Admin.findOne({ email });
        if (findAdmin) {
            return res.status(401).json({ error: "you are alreay register ! plz login" })
        }

        let admin = await Admin.create(body);
        res.status(201).json({
            message: "admin register success",
            admin,
        });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


let adminLogin = async (req, res) => {
    try {
        let { email, password } = req.body;

        if (email == "" || password == "") {
            return res.status(401).json({ error: "email and password required" })
        }

        let admin = await Admin.findOne({ email })
        if (!admin) {
            return res.status(401).json({ error: "admin not found !" })
        }
        if (admin.password != password) {
            return res.status(401).json({ error: "password invalid" })
        }
        let token = jwt.sign({ admin }, process.env.KEY, { expiresIn: "1h" })

        res.status(201).json({
            message: "admin login success",
            admin,
            token,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


let adminProfile = async (req, res) => {
    try {
        // let adminn = req.admin;
        // console.log(adminn);

        let id = req.admin._id;
        if (!id) {
            return res.status(401).json({ error: "admin not found !" })
        }

        let admin = await Admin.findById(id)

        res.status(200).json({
            message: "admin Profile",
            admin
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


let updateProfile = async (req, res) => {
    try {
        let id = req.admin._id;
        let body = req.body;
        body.id = id;

        let admin = await Admin.findByIdAndUpdate(id, body);

        res.status(200).json({
            message: "profile update success",
            body,
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

let forgetPassword = async (req, res) => {
    try {
        let { email, password, confirmPassword } = req.body;
        let body = req.body;
        let admin = await Admin.findOne({ email })

        // admin found
        if (!admin) {
            return res.status(401).json({ message: "admin not found !" })
        }
        //  confirmPassword
        if (password !== confirmPassword) {
            return res.status(401).json({ message: "invalid password!" })
        }

        body.id = admin._id;
        // update admin
        let data = await Admin.findByIdAndUpdate(admin._id,
            {
                password: password,
                confirmPassword,
            }
        )

        res.status(200).json({
            message: "update passowrd success",
            body,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}





module.exports = { adminRegister, adminLogin, adminProfile, forgetPassword, updateProfile }