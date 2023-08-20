const Joi = require("joi");

const AuthValModel = Joi.object({
    email:Joi.string().email().required(),
    password : Joi.string().required(),
    username:Joi.string().required(),
})
module.exports = AuthValModel