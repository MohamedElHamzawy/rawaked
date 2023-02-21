const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    type : String,
    title : String,
    brand : String,
    price : Number,
    salePrice : Number,
    SKU : Number,
    quantity : Number,
    shortDescription : String,
    description : String,
    category : String,
    seller: {
        type : mongoose.Types.ObjectId,
        ref : "user"
    },
    accepted : {
        type : Boolean,
        default : false
    },
    sold : {
        type : Boolean,
        default : false
    }
});

const producModel = mongoose.model("product", productSchema);
module.exports = producModel;