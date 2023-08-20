const Habit = require("../models/HabitModels/HabitModel");

const AddHabit = async (habit,userId) => {
  try {
    console.log("userId",userId)
    return await Habit.create({
      id: habit.id,
      title: habit.title,
      description: habit.description,
      startDate: habit.startDate,
      endDate: habit.endDate,
      reminderQuestion: habit.reminderQuestion,
      isReminderOn: habit.isReminderOn,
      reminderTime: habit.reminderTime,
      entries: habit.entries,
      localId:habit.localId,
      userId:userId
    });
  } catch (e) {
    console.log(e)
  }
};
module.exports=AddHabit
