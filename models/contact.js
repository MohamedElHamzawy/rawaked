const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    email: {
        type : String
    },
    name: {
        type : String
    },
    message: {
        type : String
    }
});

const contactModel = mongoose.model("contact", contactSchema);
module.exports = contactModel