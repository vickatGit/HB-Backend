const Habit = require("../models/HabitModels/HabitModel");

const UpdateHabit=async (id,habit) => {
    console.log("update habit")
    try {
        let result = await Habit.updateOne({ "_id": id }, { $set: habit });
        console.log(result)
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = UpdateHabit