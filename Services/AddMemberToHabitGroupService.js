const GroupHabit = require('../models/HabitModels/GroupHabitModel')
const Habit = require('../models/HabitModels/HabitModel')
const GetGroupHabitService = require('./GetGroupHabitService')
const AddHabitService = require('./AddHabitService')
const AddHabitsService = require('./AddHabitsService')

const AddMemberToHabitGroup = async(groupHabitId,userIds) => {
    try {
        console.log("grou ser",userIds)
        console.log("groupId",groupHabitId)
        let groupHabit = await GetGroupHabitService(groupHabitId)
        console.log("groupHabit",groupHabit)
        groupHabit.localId = "eb702572-2956-441e-b89b-7206e75ebbed"
        groupHabit.endDate = "2023-08-23T00:00:00.000Z"
        const habitIds = await AddHabitsService(groupHabit,userIds)
        console.log("groupHabitids",habitIds)
        await GroupHabit.updateOne(
            { "_id" : groupHabitId },
            { $push : { members : {$each: userIds} , habits : {$each: habitIds} }}
        )
        await Habit.updateMany({"_id":{$in:habitIds}},{$set:{"groupHabitId":groupHabitId}})

    } catch (error) {
        throw new Error(error)
    }
}

module.exports = AddMemberToHabitGroup