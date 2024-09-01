const Product = require("../models/product.model");
let cloudinary = require("../middleware/cloudinary")


let getProduct = async (req, res) => {
    try {
        let product = await Product.find().populate("categoryId").populate("subcategoryId").populate("exsubcategory");

        res.status(200).json({
            message: "product get success",
            product,
        })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


let addProduct = async (req, res) => {
    try {
        let body = req.body;
        let image_url = await cloudinary.uploader.upload(req.file.path)
        // console.log(image_url);

        let product = await Product.create({
            ...body,
            image: image_url.secure_url,
            public_id: image_url.public_id
        });

        // console.log(product);

        res.status(201).json({
            message: "product added success",
            product,
        })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


let deleteProduct = async (req, res) => {
    try {
        let { id } = req.params;

        let findProduct = await Product.findById(id)
        // console.log(findProduct.public_id);

        await cloudinary.uploader.destroy(findProduct.public_id)
        let product = await Product.findByIdAndDelete(id);

        res.status(200).json({
            message: "product delete success",
            product
        })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


let viewProduct = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;

        if (req.file) {
            let findProduct = await Product.findById(id)
            await cloudinary.uploader.destroy(findProduct.public_id)

            let image_url = await cloudinary.uploader.upload(req.file.path);

            let product = {
                ...body,
                image: image_url.secure_url,
                public_id: image_url.public_id,
            }

            let newproduct = await Product.findByIdAndUpdate(id, product);
            // console.log(newproduct);
            product._id = id;


            res.status(200).json({
                message: "product update success",
                product,
            })

        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { getProduct, addProduct, deleteProduct, viewProduct }