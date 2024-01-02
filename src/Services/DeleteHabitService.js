const Habit = require("../models/HabitModels/HabitModel");

const DeleteHabit= async (id) => {
    try {
        await Habit.deleteOne({"_id":id})
    } catch (error) {
        console.log("delet habit",error)
        throw new Error(error)
    }
}

const DeleteAllHabits= async () => {
    try {
        await Habit.deleteMany({})
    } catch (error) {
        console.log("delet habit",error)
        throw new Error(error)
    }
}

module.exports = {
    DeleteHabit,
    DeleteAllHabits
}