const Joi = require("joi");

const UpdateUserValidation = Joi.object({
    _id:Joi.string(),
    email:Joi.string().email(),
    username:Joi.string(),
    userAvatar:Joi.string(),
    userBio:Joi.string(),
    followers:Joi.string(),
    followings:Joi.string(),
})
module.exports = UpdateUserValidation