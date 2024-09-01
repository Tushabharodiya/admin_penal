let express = require("express");
const { adminRegister, adminLogin, adminProfile, forgetPassword, updateProfile } = require("../controller/admin.controller");
const { tokenVerify } = require("../middleware/auth");
let route = express.Router();

route.post("/register", adminRegister);
route.post("/login", adminLogin);
route.get("/profile/:id", tokenVerify, adminProfile);
route.patch("/forgetpassword", forgetPassword);
route.put("/profileupdate", tokenVerify,updateProfile)

module.exports = route;