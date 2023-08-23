const User = require('../models/AuthModels/AuthModel')
const Follow = require('../models/SocialModels/FollowModel')

const GetUsersByName = async(query) => {
    try {
        return await User.find({username:{$regex:query}},{password:0})
    } catch (error) {
        throw new Error(error)
    }
}
const FollowUser =  async(follows,to) => {
    try {
        await Follow.create({
            follows:follows,
            to:to
        })
    } catch (error) {
        throw new Error(error)
    }
}
const UnfollowUser = async(follows,to) => {
    try {
        await Follow.deleteOne({ $and : [ {follows:follows} , {to:to} ] })
    } catch (error) {
        throw new Error(error)
    }
}
const GetFollowers = async(userId) => {
    try {
        return await Follow.find(
            {to:userId },
            {to:0,_id:0}
        ).populate({
            path : "follows",
            select:["-password"]
        })
    } catch (error) {
        throw new Error(error)
    }
}
const GetFollowings = async(userId) => {
    try {
        return await Follow.find(
            {follows:userId },
            {follows:0,_id:0}
        ).populate({
            path : "to",
            select:["-password"]
        })
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = {
    GetUsersByName,
    FollowUser,
    UnfollowUser,
    GetFollowers,
    GetFollowings
}