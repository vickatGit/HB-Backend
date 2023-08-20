const AddHabitService = require("./AddHabitService");
const GroupHabitModel = require("../models/HabitModels/GroupHabitModel");
const Habit = require("../models/HabitModels/HabitModel");

const AddGroupHabitService = async (groupHabit, userId) => {
  try {
    const habitId = await AddHabitService(groupHabit,userId);
    await GroupHabitModel.create({
      title: groupHabit.title,
      description: groupHabit.description,
      reminderQuestion: groupHabit.reminderQuestion,
      startDate: groupHabit.startDate,
      endDate: groupHabit.endDate,
      isReminderOn: groupHabit.isReminderOn,
      reminderTime: groupHabit.reminderTime,
      localId: groupHabit.localId,
      admin: userId,
      members: [userId],
      habits: [habitId],
    });
  } catch (error) {
    console.log("group habit " ,error)
    throw new Error(error)
  }
};

module.exports = AddGroupHabitService
