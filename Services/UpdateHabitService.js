const Habit = require("../models/HabitModel");

const UpdateHabit=async (habit) => {
    console.log("update habit")
    try {
        let result = await Habit.updateOne({$set:habit})
        console.log(result)
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = UpdateHabit