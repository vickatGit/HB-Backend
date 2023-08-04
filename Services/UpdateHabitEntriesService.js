const Habit = require("../models/HabitModel");

const UpdateHabitEntries = async (id, entries) => {
  console.log("UpdateHabitEntries")
  try {
    let result = await Habit.updateOne({ "_id": id }, { $set: { entries: entries } });
    console.log(result,id)
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = UpdateHabitEntries
