const Joi = require("joi");

const GroupHabitValidationSchema = Joi.object({
    _id : Joi.string().optional(),
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
    localId : Joi.string().required(),
    admin : Joi.string(),
    members : Joi.array().items(Joi.string().required()),
    habits : Joi.array().items(Joi.string().required())
})
module.exports = GroupHabitValidationSchema