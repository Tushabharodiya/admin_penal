let mongoose = require("mongoose")

let categorySchema = mongoose.Schema({
    category: {
        type: String,
        required: true,
    }
})


let Ctaegory = mongoose.model("category", categorySchema);
module.exports = Ctaegory;