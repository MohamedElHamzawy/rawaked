const joi = require("joi");

const addValidator = {
    body : joi.object().keys({
        type : joi.string().required(),
        title : joi.string().required(),
        price : joi.number().required(),
        salePrice : joi.number().required(),
        SKU : joi.number().required(),
        quantity : joi.number().required(),
        shortDescription : joi.string().required(),
        description : joi.string().required(),
        category: joi.string().required()
    })
};

module.exports = {addValidator}