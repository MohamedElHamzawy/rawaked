const joi = require("joi");
const { joiPasswordExtendCore } = require("joi-password");
const joiPassword = joi.extend(joiPasswordExtendCore);

const signUpValidate = {
    body: joi.object().keys({
        fname: joi.string().required(),
        lname: joi.string().required(),
        company: joi.string(),
        phone: joi.string(),
        email: joi.string().email().required(),
        npassword: joiPassword.string().minOfSpecialCharacters(2).minOfLowercase(2).minOfUppercase(2).minOfNumeric(2).noWhiteSpaces().required(),
        cpassword: joi.ref("npassword"),
        address: joi.string().required(),
        country: joi.string().required()
    })
};

const vendorValidate = {
    body: joi.object().keys({
        fname: joi.string().required(),
        lname: joi.string().required(),
        company: joi.string().required(),
        phone: joi.string().required(),
        email: joi.string().email().required(),
        npassword: joiPassword.string().minOfSpecialCharacters(2).minOfLowercase(2).minOfUppercase(2).minOfNumeric(2).noWhiteSpaces().required(),
        cpassword: joi.ref("npassword"),
        address: joi.string().required(),
        country: joi.string().required()
    })
}

const loginValidate = {
    body : joi.object().keys({
        email: joi.string().email().required(),
        password: joi.string().required()
    })
};

const updateValidate = {
    body : joi.object().keys({
        fname: joi.string().required(),
        lname: joi.string().required(),
        email: joi.string().email().required(),
        address: joi.string().required(),
        country: joi.string().required()
    })
}

const becomeVendorValidate = {
    body : joi.object().keys({
        company: joi.string().required(),
        phone: joi.string().required(),
        email: joi.string().email().required()
    })
}

const contactUsValidate = {
    body : joi.object().keys({
        name: joi.string().required(),
        email: joi.string().email().required(),
        message: joi.string().required()
    })
};

module.exports = {signUpValidate, vendorValidate, loginValidate, updateValidate, becomeVendorValidate, contactUsValidate}