const GroupHabit = require('../models/HabitModels/GroupHabitModel')
const Habit = require('../models/HabitModels/HabitModel')
const GetGroupHabitService = require('./GetGroupHabitService')
const AddHabitService = require('./AddHabitService')

// gvikas = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiZ2FuZ2lzaGV0dHl2aWthc0BnbWFpbC5jb20iLCJpZCI6IjY0ZTFjMDEzMTk1ZDI3MGZmZjBlM2MwNyJ9LCJpYXQiOjE2OTI2MjAxMTMsImV4cCI6MTY5Njk0MDExM30.W6GoleLBE6FCwEEoAYfA9ONbdh2yT8_2fD76XhYTw7E
// vikas = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidmlrYXNAZ21haWwuY29tIiwiaWQiOiI2NGUxYjRhOTViOGIxNzU0ZmQ1NjNjN2YifSwiaWF0IjoxNjkyNjA2NDE4LCJleHAiOjE2OTY5MjY0MTh9.BafgR1sDH7u_lPpbFcPKXNRYAAFrtgQa4WWk87RyBmM
const AddMemberToHabitGroup = async(groupHabitId,userId) => {
    try {
        console.log("groupId",groupHabitId)
        let groupHabit = await GetGroupHabitService(groupHabitId)
        console.log("groupHabit",groupHabit)
        groupHabit.localId = "eb702572-2956-441e-b89b-7206e75ebbed"
        groupHabit.endDate = "2023-08-23T00:00:00.000Z"
        const habitId = await AddHabitService(groupHabit,userId)
        console.log("groupHabit",habitId)
        await GroupHabit.updateOne(
            { "_id" : groupHabitId },
            { $push : { members : userId , habits : habitId }}
        )
        await Habit.updateOne({"_id":habitId},{$set:{"groupHabitId":groupHabitId}})

    } catch (error) {
        throw new Error(error)
    }
}

module.exports = AddMemberToHabitGroup