const Habit = require("../models/HabitModel");

const GetHabits= async (res) => {
    console.log("GetHabits")
    try {
        return await Habit.find()
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = GetHabits