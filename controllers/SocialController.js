const { GetUsersByName, FollowUser, UnfollowUser, GetFollowers, GetFollowings } = require('../Services/SocialService')

const GetUsersByNameController = async(req,res,next) => {
    try {
        const result = await GetUsersByName(req.params.query)
        res.status(200).send({
            data:result
        })

    } catch (error) {
        res.status(500)
        next(error)
    }
}
const FollowUserController = async(req,res,next) => {
    try {
        await FollowUser(req.user.id,req.params.friendId)
        res.status(201).send({
            message:"Followed"
        })
    } catch (error) {
        next(error)
    }
}
const UnfollowUserController = async(req,res,next) => {
    try {
        await UnfollowUser(req.user.id,req.params.friendId)
        res.status(201).send({
            message:"Unfollowed"
        })
    } catch (error) {
        next(error)
    }
}
const GetFollowersController = async(req,res,next) => {
    try {
    const result = await GetFollowers(req.user.id)
    res.status(200).send({
        data : result
    })
    } catch (error) {
        next(error)
    }
}

const GetFollowingsController = async(req,res,next) => {
    try {
    const result = await GetFollowings(req.user.id)
    res.status(200).send({
        data : result
    })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    GetUsersByNameController,
    FollowUserController,
    UnfollowUserController,
    GetFollowersController,
    GetFollowingsController
}