const GroupHabit = require('../models/HabitModels/GroupHabitModel')

const UpdateGroupHabitService = async(groupHabit,groupHabitId) => {
    try {
        let res = await GroupHabit.updateOne(
            {"_id":groupHabitId},
            {$set:{
                title: groupHabit.title,
                description : groupHabit.description,
                startDate : groupHabit.startDate,
                endDate : groupHabit.endDate,
                isReminder : groupHabit.isReminderOn,
                reminderQuestion :groupHabit.reminderQuestion,
                reminderTime : groupHabit.reminderTime
            }}
            )
        console.log(res)
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = UpdateGroupHabitService