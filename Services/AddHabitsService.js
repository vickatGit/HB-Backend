const Habit = require("../models/HabitModels/HabitModel");

const AddHabits = async (habit,userIds) => {
  try {
    let habits=[]
    console.log("user",userIds)
    userIds.forEach(element => {
        habits.push({
            title: habit.title,
            description: habit.description,
            startDate: habit.startDate,
            endDate: habit.endDate,
            reminderQuestion: habit.reminderQuestion,
            isReminderOn: habit.isReminderOn,
            reminderTime: habit.reminderTime,
            entries: habit.entries,
            localId:habit.localId,
            userId:element
          })
    });
    const result = await Habit.create(habits);
    console.log("habits",result)
    return result
  } catch (e) {
    console.log(e)
  }
};
module.exports=AddHabits
