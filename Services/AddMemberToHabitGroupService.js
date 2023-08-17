const GroupHabit = require('../models/HabitModels/GroupHabitModel')
const GetGroupHabitService = require('./GetGroupHabitService')
const AddHabitService = require('./AddHabitService')

const AddMemberToHabitGroup = async(groupHabitId,userId) => {
    try {
        console.log("groupId",groupHabitId)
        const groupHabit = await GetGroupHabitService(groupHabitId)
        console.log("groupHabit",groupHabit)
        const habitId = await AddHabitService(groupHabit)
        console.log("groupHabit",habitId)
        await GroupHabit.updateOne(
            { "_id" : groupHabitId },
            { $push : { members : userId , habits : habitId }}
        )

    } catch (error) {
        throw new Error(error)
    }
}

module.exports = AddMemberToHabitGroup