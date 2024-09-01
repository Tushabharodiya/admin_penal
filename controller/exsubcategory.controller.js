const Exsubcategory = require("../models/exsubcategory.model");



let getExsubcategory = async (req, res) => {
    try {
        let exsubcategory = await Exsubcategory.find().populate("categoryId").populate("subcategoryId");

        res.status(200).json({
            message: "exsubcategory get success",
            exsubcategory,
        })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


let createExsubcategory = async (req, res) => {
    try {

        let body = req.body;

        let duplicate = await Exsubcategory.findOne({ exsubcategory: body.exsubcategory });

        if (duplicate) {
            return res.status(401).json({ message: "this subcategory alreay define" })
        }
        let exsubcategory = await Exsubcategory.create(body)

        res.status(201).json({
            message: "category create success",
            exsubcategory,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


let deleteExsubcategory = async (req, res) => {
    try {

        let { id } = req.params;

        let exsubcategory = await Exsubcategory.findByIdAndDelete(id)
        // console.log(subcategory);


        res.status(200).json({
            message: "exsubcategory delete success",
            exsubcategory,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


let updateExsubcategory = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;
        body._id = id;

        let exsubcategory = await Exsubcategory.findByIdAndUpdate(id, body);

        res.status(200).json({
            message: "category update success",
            body,
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { getExsubcategory, createExsubcategory, deleteExsubcategory, updateExsubcategory }