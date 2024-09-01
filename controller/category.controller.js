const Ctaegory = require("../models/category.model")



let getCategory = async (req, res) => {
    try {
        let category = await Ctaegory.find()

        res.status(200).json({
            message: "category get success",
            category,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


let createCategory = async (req, res) => {
    try {

        let body = req.body;

        let duplicate = await Ctaegory.findOne({ category: body.category });

        if (duplicate) {
            return res.status(401).json({ message: "this category alreay define" })
        }
        let category = await Ctaegory.create(body)

        res.status(201).json({
            message: "category create success",
            category,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


let deleteCategory = async (req, res) => {
    try {

        let { id } = req.params;

        let category = await Ctaegory.findByIdAndDelete(id)

        res.status(200).json({
            message: "category delete success",
            category,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


let updateCategory = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;
        req.body = id;

        let category = await Ctaegory.findByIdAndUpdate(id, body);

        res.status(200).json({
            message: "category update success",
            body,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { getCategory, createCategory, deleteCategory, updateCategory }