const Joi=require("joi");
const EntriesValidationSchema = require('./EntriesValidationSchema')
// const validator = (schema) => (payload) => schema.validate(payload,{abortEarly:false})

const HabitValidationSchema=Joi.object({
    _id:Joi.string().optional(),
    title:Joi.string().required(),
    description:Joi.string().required(),
    reminderQuestion:Joi.string().optional(),
    startDate:Joi.date().required(),
    endDate:Joi.date().required().greater(Joi.ref("startDate")),
    isReminderOn:Joi.boolean().required(),
    reminderTime:Joi.date().when('isReminderOn',{   
        is:true,
        then:Joi.date().required(),
        otherwise:Joi.date().optional()
    }),
    localId:Joi.string().required(),
    entries:EntriesValidationSchema
})

// exports.habitValidator = validator(HabitValidationSchema)
 module.exports=HabitValidationSchema