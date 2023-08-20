const GroupHabitModel = require("../models/HabitModels/GroupHabitModel");

const GetGroupHabits = async (userId) => {
  try {
    return await GroupHabitModel.find({
      members: { $elemMatch: { $eq: userId } },
    }).populate({
      path: "habits",
      select: ['reminderQuestion','isReminderOn','reminderTime',"entries", "localId","userId"],
    }).populate({
      path:'members',
      select : ['username']
  });
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = GetGroupHabits;
