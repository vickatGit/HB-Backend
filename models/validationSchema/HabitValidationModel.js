const Joi=require("joi");
const validator = (schema) => (payload) => schema.validate(payload,{abortEarly:false})

const HabitValidationSchema=Joi.object({
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
    entries:Joi.array().optional()
})

// exports.habitValidator = validator(HabitValidationSchema)
 module.exports=HabitValidationSchema
