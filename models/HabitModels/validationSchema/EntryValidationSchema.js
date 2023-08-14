const Joi = require('joi');

const EntryValidationSchema = Joi.object({
    timestamp:Joi.date().required(),
    score:Joi.number().required(),
    completed:Joi.boolean().required()
})
module.exports = EntryValidationSchema