const cartModel = require("../../models/cart.model");
const orderModel = require("../../models/order.model");

const checkOut = async (req,res,next) => {
    const user = "mohamed.f.elhamzawy@gmail.com"
    var subtotal;
    const products = await cartModel.findOne({owner: user}).select("products");
    for (let i = 0; i < products.length; i++) {
        const x = products[i];
        subtotal += x.price;
    }
    var shipping = 0.01 * subtotal;
    res.status(200).json({products, subtotal, shipping});
}

const makeOrder = async (req,res,next) => {
    const {fname,lname,email,phone,address,city,country,postal,cNumber,cHolder,
        exp,cvc,notes,products,subtotal,shipping} = req.body;
    await new orderModel({fname,lname,email,phone,address,city,country,postal,cNumber,cHolder,
        exp,cvc,notes,products,subtotal,shipping}).save();
    res.status(200).json({Message:"your order is requested successfully!"})
}
module.exports = {checkOut, makeOrder};