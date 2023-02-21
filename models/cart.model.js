const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    products : {
        type : mongoose.Types.Array()
    },
    owner : {
        type : String
    }
});

const cartModel = mongoose.model("cart", cartSchema);

module.exports = cartModel;