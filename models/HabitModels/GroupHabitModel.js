const moongoose = require('moongoose')

const GroupHabit = moongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    reminderQuestion: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    isReminderOn: { type: Boolean, required: true },
    reminderTime: { type: Date },
    localId : {type:String , required : true },
    admin : { type : moongoose.Schema.Types.ObjectId , ref : 'AuthModel' },
    members :{type: [ moongoose.Schema.Types.ObjectId ] , ref : 'AuthModel'},
    habits :{type: [ moongoose.Schema.Types.ObjectId ] , ref : 'Habit'}

})
module.exports = moongoose.Model("GroupHabit",)