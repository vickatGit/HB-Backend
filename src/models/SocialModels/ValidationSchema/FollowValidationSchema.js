const Joi = require("joi");

const FollowValidator = Joi.object({
    follows : Joi.string().required(),
    to : Joi.string().required()
})