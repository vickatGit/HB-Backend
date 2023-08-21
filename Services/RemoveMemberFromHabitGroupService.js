const GetGroupHabitService = require('./GetGroupHabitService')
const GroupHabit = require('../models/HabitModels/GroupHabitModel')
const Habit = require('../models/HabitModels/HabitModel')

const RemoveMemberFromGroupHabit = async(groupHabitId, userIds) => {
    try {
        console.log("userIds",userIds,"groupId",groupHabitId)
         await GroupHabit.updateOne({"_id":groupHabitId},{$pull : {members : {$in:userIds}}})
         let tobeDeltedHabitIds = []
         let habits = await Habit.find({
            $and:[
               {"groupHabitId":groupHabitId},
                {"userId":{$in:userIds}}
            ]
        })
        console.log("removable habits ",habits)
        habits.forEach(element => {
            console.log("habit",element)
            tobeDeltedHabitIds.push(element._id)
        });
        console.log("removable habits Ids",tobeDeltedHabitIds)
         await Habit.deleteMany({
            "_id":{$in:tobeDeltedHabitIds}
         })
         await GroupHabit.updateOne({"_id":groupHabitId},{$pull : {habits : {$in:tobeDeltedHabitIds}}})
    } catch (error) {
        throw new Error(error)
    }
}
 module.exports = RemoveMemberFromGroupHabit