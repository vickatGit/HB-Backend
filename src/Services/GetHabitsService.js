const Habit = require("../models/HabitModels/HabitModel");

const GetHabits= async (userId) => {
    console.log("GetHabits")
    try {
        return await Habit.find({"userId":userId})
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = GetHabits