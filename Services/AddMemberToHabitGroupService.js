const GroupHabit = require('../models/HabitModels/GroupHabitModel')
const GetGroupHabitService = require('./GetGroupHabitService')
const AddHabitService = require('./AddHabitService')

const AddMemberToHabitGroup = async(groupHabitId,userId) => {
    try {
        console.log("groupId",groupHabitId)
        let groupHabit = await GetGroupHabitService(groupHabitId)
        console.log("groupHabit",groupHabit)
        groupHabit.localId = "eb702572-2956-441e-b89b-7206e75ebbed"
        groupHabit.endDate = "2023-08-23T00:00:00.000Z"
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