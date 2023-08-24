const Joi = require("joi");

const AuthValModel = Joi.object({
    email:Joi.string().email().required(),
    password : Joi.string().required(),
    username:Joi.string().required(),
    userAvatar:Joi.string(),
    userBio:Joi.string(),
    followers:Joi.string(),
    followings:Joi.string(),
})
module.exports = AuthValModel