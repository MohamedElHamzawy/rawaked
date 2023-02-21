const joi = require("joi");

const makeOrderValidate = {
    body : joi.object().keys({
        fname : joi.string().required(),
        lname : joi.string().required(),
        email : joi.string().email().required(),
        phone : joi.string().required(),
        address : joi.string().required(),
        city : joi.string().required(),
        country : joi.string().required(),
        postal : joi.number().required(),
        cNumber : joi.number().required(),
        cHolder : joi.number().required(),
        exp : joi.date().required(),
        cvc : joi.number().required(),
        notes : joi.string().required(),
        products : joi.array().required(),
        subtotal : joi.number().required(),
        shipping : joi.number().required()
    })
};

module.exports = {makeOrderValidate}