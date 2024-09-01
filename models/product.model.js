let mongoose = require("mongoose")


let productSchema = mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required: true,
    },
    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subcategory",
        required: true,
    },
    exsubcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "exsubcategory",
        required: true,
    },
    productname: {
        type: String,
        required: true,
    },
    qty: {
        type: Number,
        default: 1,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    public_id: {
        type: String,
    }
})

let Product = mongoose.model("products", productSchema)

module.exports = Product;