const mongoose=require('mongoose');

const GroupHabit = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    reminderQuestion: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    isReminderOn: { type: Boolean, required: true },
    reminderTime: { type: Date },
    localId : {type:String , required : true },

    admin : { type : mongoose.Schema.Types.ObjectId , ref : 'AuthModel' },
    members :{type: [ mongoose.Schema.Types.ObjectId ] , ref : 'AuthModel'},
    habits :{type: [ mongoose.Schema.Types.ObjectId ] , ref : 'Habit'}

})
module.exports = mongoose.model("GroupHabit",GroupHabit)