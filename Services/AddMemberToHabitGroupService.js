const GroupHabit = require('../models/HabitModels/GroupHabitModel')
const Habit = require('../models/HabitModels/HabitModel')
const GetGroupHabitService = require('./GetGroupHabitService')
const AddHabitService = require('./AddHabitService')
const AddHabitsService = require('./AddHabitsService')
const SendHabitrequestService = require('./SendHabitRequestService')
const AuthModel = require('../models/AuthModels/AuthModel')
const HabitRequest = require('../models/SocialModels/HabitRequestModel')

const AddMemberToHabitGroup = async(groupHabitId,userIds) => {
    try {
        let groupHabit = await GetGroupHabitService(groupHabitId)
        const fcmTokens = await AuthModel.find({ _id : {$in:userIds}},'fcmToken -_id')
        const userTokens = []
        fcmTokens.forEach(element => {userTokens.push(element.fcmToken)});
        const habitRequests = []
        userIds.forEach(userId => {
            habitRequests.push({
                from:groupHabit.admin,
                to:userId,
                startDate:groupHabit.startDate,
                endDate:groupHabit.endDate,
            })
        });
        await HabitRequest.insertMany(habitRequests)      
        await SendHabitrequestService(userTokens)
        // const habitIds = await AddHabitsService(groupHabit,userIds)
        // console.log("groupHabitids",habitIds)
        // await GroupHabit.updateOne(
        //     { "_id" : groupHabitId },
        //     { $push : { members : {$each: userIds} , habits : {$each: habitIds} }}
        // )
        // await Habit.updateMany({"_id":{$in:habitIds}},{$set:{"groupHabitId":groupHabitId}})

    } catch (error) {
        throw new Error(error)
    }
}

module.exports = AddMemberToHabitGroup