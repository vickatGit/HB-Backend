const Habit = require("../models/HabitModels/HabitModel");

const GetHabit= async (id) => {
    console.log("GetHabits")
    
    try {
        return await Habit.findOne({"_id":id})
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = GetHabit