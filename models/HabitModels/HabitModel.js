const mongoose=require('mongoose');
const {Entry}=require('./EntryModel');

const Habit=mongoose.Schema({
    // _id:{
    //     type : mongoose.Types.ObjectId
    // },
    title: { type: String, required: true },
    description: { type: String },
    reminderQuestion: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    isReminderOn: { type: Boolean, required: true },
    reminderTime: { type: Date },
    localId: {type:String, required:true},
    userId: {type:String },
    entries:[Entry],
    groupHabitId :{type:String},
    groupHabitLocalId :{type:String},
})
module.exports=mongoose.model("Habit",Habit)