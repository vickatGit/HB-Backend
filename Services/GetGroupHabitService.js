const GroupHabit = require('../models/HabitModels/GroupHabitModel')

const GetGroupHabit = async(groupHabitId) => {
    try {
        await GroupHabit.findOne({_id:groupHabitId})   
    } catch (error) {
        throw new Error(error)
    }
}
