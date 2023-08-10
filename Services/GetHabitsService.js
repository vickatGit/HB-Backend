const Habit = require("../models/HabitModel");

const GetHabits= async () => {
    console.log("GetHabits")
    try {
        return await Habit.find()
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = GetHabits