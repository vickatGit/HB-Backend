const GetGroupHabitService = require('./GetGroupHabitService')
const GroupHabit = require('../models/HabitModels/GroupHabitModel')

const RemoveMemberFromGroupHabit = async(groupHabitId, userId) => {
    try {

        await GroupHabit.updateOne({"_id":groupHabitId},{$pull : {members : userId}})
    
    } catch (error) {
        throw new Error(error)
    }
}
 module.exports = RemoveMemberFromGroupHabit