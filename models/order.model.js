const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    fname : {type:String},
    lname : {type:String},
    email : {type:String},
    phone : {type:String},
    address : {type:String},
    city : {type:String},
    country : {type:String},
    postal : {type:Number},
    cNumber : {type:Number},
    cHolder : {type:Number},
    exp : {type:Date},
    cvc : {type:Number},
    notes : {type:String},
    products : {type:Array},
    subtotal : {type:Number},
    shipping : {type:Number},
    accepted : {
        type : Boolean,
        default : false
    },
    sold : {
        type : Boolean,
        default : false
    }
});

const orderModel = mongoose.model("order", orderSchema);
module.exports = orderModel;