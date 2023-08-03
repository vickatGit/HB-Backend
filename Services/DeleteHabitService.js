const Habit = require("../models/HabitModel");

const DeleteHabit= async (id) => {
    try {
        await Habit.deleteOne({"_id":id})
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = DeleteHabit