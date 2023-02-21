const orderModel = require("../../models/order.model");
const producModel = require("../../models/product.model");
const userModel = require("../../models/user.model");

const deleteProduct = async (req,res,next) => {
    const {_id} = req.body;
    const deleted = await producModel.findByIdAndDelete({_id});
    res.status(200).json({Message:"product is deleted successfully"});
}

const updateProduct = async (req,res,next) => {
    const {_id, type, title, price, salePrice, SKU, quantity, shortDescription, description, category} = req.body;
    const find = await producModel.findByIdAndUpdate({_id},{type, title, price, salePrice, SKU, quantity, shortDescription, description, category});
    res.status(200).json({Message:"product is updated successfully"})
}

const acceptProduct = async (req,res,nex) => {
    const {_id} = req.body;
    const accept = await producModel.findByIdAndUpdate({_id},{accepted:true});
    res.status(200).json({Message:"product is accepted successfully"});
}

const getProducts = async (req,res,next) => {
    const products = await producModel.find({});
    res.status(200).json({products})
}

const deleteVendor = async (req,res,next) => {
    const {email} = req.body;
    const deleted = await userModel.findOneAndDelete({email});
    res.status(200).json({Message:"User panned successfully"});
}

const updateVendor = async (req,res,next) => {
    const {fname, lname, company, phone, email, address, country} = req.body;
    const find = await userModel.findOneAndUpdate({email},{fname, lname, company, phone, address, country});
    res.status(200).json({Message:"Vendor is updated successfully"});
}

const acceptVendor = async (req,res,next) => {
    const {email} = req.body;
    const accept = await userModel.findOneAndUpdate({email}, {accepted:true});
    res.status(200).json({Message:"vendor is accepted successfully"});
}

const getVendors = async (req,res,next) => {
    const vendors = await userModel.find({role:"vendor"});
    res.status(200).json({vendors});
}

const openVendor = async (req,res,next) => {
    const {email} = req.body;
    const vendor = await userModel.findOne({email});
    res.status(200).json({vendor});
}

const vendorProducts = async (req,res,netx) => {
    const {_id} = req.body;
    const products = await producModel.find({seller:_id});
    res.status(200).json({products});
}

const getOrders = async (req,res,next) => {
    const orders = await orderModel.find({});
    res.status(200).json({orders});
}

const deleteOrder = async (req,res,next) => {
    const {_id} = req.body;
    const deleted = await orderModel.findByIdAndDelete({_id});
    res.status(200).json({Message:"order is deleted successfully"});
}

const acceptOrder = async (req,res,next) => {
    const {_id} = req.body;
    const accept = await orderModel.findByIdAndUpdate({_id}, {accepted:true});
    res.status(200).json({Message:"order is accepted successfully"});
}

const soldOrder = async (req,res,next) => {
    const {_id} = req.body;
    const accept = await orderModel.findByIdAndUpdate({_id}, {sold:true});
    res.status(200).json({Message:"order is sold successfully"});
}

const updateOrder = async (req,res,next) => {
    const {_id,fname,lname,email,phone,address,city,country,postal,notes,products,subtotal,shipping} = req.body
    const updated = await orderModel.findByIdAndUpdate({_id}, {fname,lname,email,phone,address,city,country,postal,notes,products,subtotal,shipping});
    res.status(200).json({Message:"order is updated successfully"});
}

module.exports = {
    deleteProduct, updateProduct, acceptProduct, getProducts,
    updateVendor, deleteVendor, acceptVendor, getVendors, openVendor, vendorProducts,
    getOrders, deleteOrder, acceptOrder, soldOrder, updateOrder
};