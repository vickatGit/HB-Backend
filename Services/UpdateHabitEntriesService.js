const Habit = require("../models/HabitModel");

const UpdateHabitEntries = async (id, habitEntries) => {
  console.log("UpdateHabitEntries")
  try {
    let result = await Habit.updateOne({ "_id": id }, { $set: { entries: habitEntries } });
    console.log(result)
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = UpdateHabitEntries
