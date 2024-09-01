let express = require("express");
let routes = express.Router();
let adminRoues = require("./admin.route");
let categoryRoute = require("./category.route");
let subcategoryRoute = require("./subcategory.route");
let exsubcategoryRoute = require("./exsubcategory.route");
let productRoute = require("./product.route")


routes.use("/admin", adminRoues);
routes.use("/category", categoryRoute);
routes.use("/subcategory", subcategoryRoute);
routes.use("/exsubcategory", exsubcategoryRoute);
routes.use("/product", productRoute);



module.exports = routes;