const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fname: {type: String},
    lname: {type: String},
    company: {type: String},
    phone: {type: String},
    email: {type: String, unique: true},
    password: {type: String},
    address: {type: String},
    country: {type: String},
    role: {type: String, default:"user"},
    verify: {type: Boolean, default: false},
    accept: {type: Boolean, default: false}
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel