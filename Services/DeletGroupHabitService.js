const GroupHabit = require('../models/HabitModels/GroupHabitModel')
const DeleteHabitService = require('../Services/DeleteHabitService')
const Habit = require('../models/HabitModels/HabitModel')

const DeleteGroupHabitService = async(groupHabitId) => {
    try {
        groupHabit = await GroupHabit.findOne({"_id":groupHabitId})
        console.log("groupHabitId",groupHabit)
    
            console.log("groupHabitId",groupHabit.members)
            
        await Habit.deleteMany(
            {
                _id:{$in:groupHabit.habits}
            }
        )
        await GroupHabit.deleteOne({"_id":groupHabitId})
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = DeleteGroupHabitService