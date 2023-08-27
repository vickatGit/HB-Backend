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
        groupHabit.endDate = groupHabit.endDate
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