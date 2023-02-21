const mailSender = require("../../commons/verification");
const userModel = require("../../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const contactModel = require("../../models/contact");
const orderModel = require("../../models/order.model");

const salt = parseInt(process.env.SALT_ROUNDS)
const key = process.env.TOKEN_KEY;

const userSignUp = async (req,res,next) => {
    const {fname, lname, company, phone, email, npassword, cpassword, address, country} = req.body;
    const find = await userModel.findOne({email:email});
    if (find) {
        res.status(400).json({Error:"User already registed"})
    } else {
        const password = bcrypt.hashSync(npassword, salt)
        if (!company && !phone) {
            await new userModel({fname, lname, company, phone, email, password, address, country}).save();
        } else {
            await new userModel({fname, lname, company, phone, email, password, address, country, role: "vendor"}).save();
        }
        const token = jwt.sign(email, key)
        const msg = `<div style="text-align:center">
        <h1>If You Registed in RAWAKED, please open link below to verify it was you</h1>
        <a style="border:1px solid grey;padding:8px;border-radius:8px;text-decoration:none" href="${req.protocol}://${req.headers.host}/api/user/verification/${token}">click here</a>
        </div>`
        mailSender(email, msg)
        res.status(200).json({Message:"User registed succefully", token})
    }
};

const userVerify = async (req,res,next) => {
    const {token} = req.params;
    const email = jwt.verify(token, key);
    await userModel.findOneAndUpdate({email:email, verify:false},{verify:true});
    res.status(200).json({Message:"You have been verified successfully !"});
};

const userLogin = async (req,res,next) => {
    const {email, password} = req.body;
    const find = await userModel.findOne({email:email, verify:true});
    if (find) {
        pass = bcrypt.compareSync(password, find.password)
        pass ? res.status(200).json({Message:"Logged in"}) : res.status(400).json({Error:"Invalid Password"});
    } else {
        res.status(400).json({Error:"User doesn't exist or verified"});
    }
};

const userUpdate = async (req, res, next) => {
    const {fname, lname, email, address, country} = req.body;
    await userModel.findOneAndUpdate({email}, {fname, lname, address, country})
    res.status(200).json({Message:"Updated Successfully"})
};

const becomeVendor = async (req, res, next) => {
    const {company, phone, email} = req.body;
    await userModel.findOneAndUpdate({email}, {company, phone, role:"vendor"})
    res.status(200).json({Message:"Updated Successfully"})
};

const forgetPassword = async (req,res,next) => {
    const {email} = req.body;
    const find = await userModel.findOne({email});
    if (find) {
        const token = jwt.sign(email, key);
        const msg = `<div style="text-align:center">
        <h1>If You Are Trying to get your account back click on the link then log in with password (test) and change your password</h1>
        <h3> or just ignore that </h3>
        <a style="border:1px solid grey;padding:8px;border-radius:8px;text-decoration:none" href="${req.protocol}://${req.headers.host}/api/user/newPassword/${token}">click here</a>
        </div>`
        mailSender(email, msg);
        res.status(200).json({Meassge:"Check your email inbox"});
    } else {
        res.status(400).json({Error:"Email not even registed!!!"})
    }
}

const newPassword = async (req,res,next) => {
    const {token} = req.params;
    const email = jwt.verify(token, key);
    const find = await userModel.findOne({email});
    if (find) {
        const pass = bcrypt.hashSync("test", salt);
        await userModel.findOneAndUpdate({email: find.email},{password: pass});
        res.status(200).json({Message:"password updated successfully..."})
    } else {
        res.status(400).json({Error:"confirmed password isn't as same as new password!!!"})
    }
}

const contactUs = async (req,res,next) => {
    const {name, email, message} = req.body;
    const contactUs = await new contactModel({name,email,message}).save();
    res.status(200).json({message:"We recieved your message"});
}

const myOrders = async (req,res,next) => {
    const {email} = req.body;
    const orders = await orderModel.find({email});
    res.status(200).json({orders});
}

const myProducts = async (req,res,next) => {
    // هعمل سيرش بالسيلر هنا 
}

module.exports = {userSignUp, userLogin, userVerify, userUpdate, becomeVendor, forgetPassword, newPassword, contactUs, myOrders};