const Subcategory = require("../models/subcategory.model")

let getSubcategory = async (req, res) => {
    try {
        let subcategory = await Subcategory.find().populate("categoryId");

        res.status(200).json({
            message: "subcategory get success",
            subcategory,
        })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


let createSubcategory = async (req, res) => {
    try {

        let body = req.body;

        let duplicate = await Subcategory.findOne({ subcategory: body.subcategory });

        if (duplicate) {
            return res.status(401).json({ message: "this subcategory alreay define" })
        }
        let subcategory = await Subcategory.create(body)

        res.status(201).json({
            message: "category create success",
            subcategory,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


let deleteSubcategory = async (req, res) => {
    try {

        let { id } = req.params;

        let subcategory = await Subcategory.findByIdAndDelete(id)
        // console.log(subcategory);


        res.status(200).json({
            message: "subcategory delete success",
            subcategory,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


let updateSubcategory = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;
        body._id = id;

        let subcategory = await Subcategory.findByIdAndUpdate(id, body);

        res.status(200).json({
            message: "category update success",
            body,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { getSubcategory, createSubcategory, deleteSubcategory, updateSubcategory }