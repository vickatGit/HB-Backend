const Habit = require("../models/HabitModel");

const AddHabit = async (habit) => {
  try {
    await Habit.create({
      id: habit.id,
      title: habit.title,
      description: habit.description,
      startDate: habit.startDate,
      endDate: habit.endDate,
      reminderQuestion: habit.reminderQuestion,
      isReminderOn: habit.isReminderOn,
      reminderTime: habit.reminderTime,
      entries: habit.entries,
    });
  } catch (e) {
    console.log(e)
  }
};
module.exports=AddHabit
