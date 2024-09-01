let express = require("express");
const { createSubcategory, getSubcategory, deleteSubcategory, updateSubcategory } = require("../controller/subcategory.controller");
let route = express.Router();

// subcategory
route.get("/get", getSubcategory);
route.post("/create", createSubcategory);
route.delete("/delete/:id", deleteSubcategory);
route.put("/update/:id", updateSubcategory);


module.exports = route;