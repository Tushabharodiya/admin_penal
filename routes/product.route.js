let express = require("express");
const { getProduct, addProduct, deleteProduct, viewProduct } = require("../controller/product.controller");
let route = express.Router();
let multer = require("multer")
let storage = multer.diskStorage({});
let upload = multer({ storage: storage }).single("image")

// category
route.get("/get", getProduct);
route.post("/add", upload, addProduct);
route.delete("/delete/:id", upload, deleteProduct);
route.put("/update/:id", upload, viewProduct)


module.exports = route;