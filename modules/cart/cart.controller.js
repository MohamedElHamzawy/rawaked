const cartModel = require("../../models/cart.model")

const showCart = async (req,res,next) => {
    const {user} = req.body;
    const find = await cartModel.findOne({owner: user})
    if (find) {
        res.status(200).json({find})
    } else {
        res.status(200).json({Message:"Cart is empty"})
    }
};

const addProduct = async (req,res,next) => {
    const {user, p1, p2} = req.body;
    const find = await cartModel.findOne({owner: user});
    if (find) {
        find.products.push(p2)
        const cart = await cartModel.updateOne({owner: user}, {products: find.products}, {new:true});
        res.status(200).json({Message:"products added successfully", cart})
    } else {
        const ncart = await new cartModel({owner:user, products:[p1]}).save()
        res.status(200).json({Message:"products added sucessfully", ncart})
    }
}

module.exports = {showCart, addProduct}