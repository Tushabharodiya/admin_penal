let express = require("express");
const { getExsubcategory, createExsubcategory, deleteExsubcategory, updateExsubcategory } = require("../controller/exsubcategory.controller");
let route = express.Router();

// exsubcategory
route.get("/get", getExsubcategory);
route.post("/create", createExsubcategory);
route.delete("/delete/:id", deleteExsubcategory);
route.put("/update/:id", updateExsubcategory);


module.exports = route;