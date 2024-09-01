let mongoose = require("mongoose")


let exsubcategorySchama = mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required: true,
    },
    subcategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subcategory",
        required: true,
    },
    exsubcategory: {
        type: String,
        required: true,
    }
});

let Exsubcategory = mongoose.model("exsubcategory", exsubcategorySchama)
module.exports = Exsubcategory;