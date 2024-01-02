const GroupHabit = require('../models/HabitModels/GroupHabitModel')

const GetGroupHabit = async(groupHabitId) => {
    try {
        return await GroupHabit.findOne({"_id":groupHabitId})
        .populate({
            path:'habits',
            select : ['entries','localId']
        })
        .populate({
            path:'members',
            select : ['username']
        });
    } catch (error) {
        throw new Error(error)
    }
}
module.exports =GetGroupHabit
