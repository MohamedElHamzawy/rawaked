const producModel = require("../../models/product.model");

const sellProduct = async (req,res,next) => {
    const {type, title, price, salePrice, SKU, quantity, shortDescription, description, category, seller} = req.body;
    await new producModel({type, title, price, salePrice, SKU, quantity, shortDescription, description, category}).save();
    res.status(200).json({Message:"Product added successfully"})
};

const allProducts = async (req,res,next) => {
    const products = await producModel.find({});
    res.status(200).json(products)
}

const getCategories = async (req,res,next) => {
    const categories = await producModel.find({}).select("category");
    res.json({categories});
}

const categoryProducts = async (req,res,next) => {
    const {category} = req.body;
    const products = await producModel.find({category});
    if(products.length > 0){
        res.status(200).json({products});
    } else {
        res.status(400).json({Error:"No products in this category"})
    }
}

const getProduct = async (req,res,next) => {
    const {catName} = req.body;
    const products = await producModel.find({title:catName});
    if (products.length > 0) {
        res.status(200).json({products});
    } else {
        res.status(400).json({Error:"There is no such product!"})
    }
}

const openProduct = async (req,res,next) => {
    const {id} = req.params;
    const product = await producModel.findOne({_id:id});
    const related = await producModel.find({category:product.category});
    res.status(200).json({product, related});
}

module.exports = {sellProduct, allProducts, getCategories, categoryProducts, getProduct, openProduct}