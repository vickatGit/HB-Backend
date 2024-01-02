const Joi = require("joi");
const EntryValidationSchema = require('./EntryValidationSchema');

const EntriesValidationSchema = Joi.object( {
    entries:Joi.array().items(EntryValidationSchema).optional()
})

module.exports = EntriesValidationSchema