let mongoose = require("mongoose")


let subcategorySchema = mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
    },
    subcategory: {
        type: String,
        required: true,
    }
});


let Subcategory = mongoose.model("subcategory", subcategorySchema);

module.exports = Subcategory;