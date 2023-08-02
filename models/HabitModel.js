const mongoose=require('mongoose');
const {Entry}=require('mongoose');

const Habit=mongoose.Schema({
    _id:{
        type : mongoose.Types.ObjectId,
        default : mongoose.default.ObjectId
    },
    title: { type: String, required: true },
    description: { type: String },
    reminderQuestion: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    isReminderOn: { type: Boolean, required: true },
    reminderTime: { type: Date },
    entries : [entry]
})
module.exports={
    Habit
}