const GroupHabitModel = require('../models/HabitModels/GroupHabitModel')

const GetGroupHabits = async(userId) => {
    try {
        return await GroupHabitModel.find({
            members : {$elemMatch : {$eq : userId}}
        })
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = GetGroupHabits