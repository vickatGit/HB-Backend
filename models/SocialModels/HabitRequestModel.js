
const mongoose= require('mongoose')
const HabitRequest = mongoose.Schema({
    from:{ type : mongoose.Schema.Types.ObjectId , ref : 'AuthModel' },
    to: { type : mongoose.Schema.Types.ObjectId , ref : 'AuthModel' },
    habitTitle : {type : String, required:true },
    groupHabitI : {type : String, required:true },
    startDate: {type:Date, required:true},
    endDate: {type:Date, required:true},
})

module.exports = mongoose.model("HabitRequest",HabitRequest)