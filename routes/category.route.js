let express = require("express");
const { getCategory, createCategory, deleteCategory, updateCategory } = require("../controller/category.controller");
let route = express.Router();

// category
route.get("/get", getCategory);
route.post("/create",createCategory);
route.delete("/delete/:id",deleteCategory);
route.put("/update/:id",updateCategory);



module.exports = route;