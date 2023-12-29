const User = require("../models/AuthModels/AuthModel");
const Follow = require("../models/SocialModels/FollowModel");
const HabitRequest = require('../models/SocialModels/HabitRequestModel')

const GetGroupHabitService = require('./GetGroupHabitService')
const GroupHabit = require('../models/HabitModels/GroupHabitModel')
const Habit = require('../models/HabitModels/HabitModel')
const HabitRequestModel = require('../models/SocialModels/HabitRequestModel')
const AddHabitsService = require('../Services/AddHabitsService')
const dotenv = require('dotenv').config();
const {S3Client,GetObjectCommand, PutObjectCommand, DeleteObjectCommand} = require("@aws-sdk/client-s3")
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner")


const s3Client =  new S3Client({
  region:`${process.env.MY_AWS_REGION}`,
  credentials : {
    accessKeyId:`${process.env.MY_AWS_ACCESS_ID}`,
    secretAccessKey:`${process.env.MY_AWS_SECRET_ACCESS_KEY}`
  }
})


const GetUserPictureUrl = async(userid) => {
  const command = new GetObjectCommand({
    Bucket:"habit-builder-bucket",
    Key:`images/avatars/${userid}.jpeg`,
  })
  return await getSignedUrl(s3Client,command)
}
const UploadUserPictureUrl = async(userid) => {
 const command = new PutObjectCommand({
  Bucket:"habit-builder-bucket",
  Key:`images/avatars/${userid}.jpeg`,
  ContentType : 'image/jpeg'
 })
 return await getSignedUrl(s3Client,command)
}

const AcceptHabitRequestService = async(groupHabitId,userId) => {
    try {
      console.log(groupHabitId)
        let groupHabit = await GetGroupHabitService(groupHabitId)
        let userIds = []
        userIds.push(userId)
        console.log(groupHabit)
        const habitIds = await AddHabitsService(groupHabit,userIds)
        console.log("groupHabitids",habitIds)
        await GroupHabit.updateOne(
            { "_id" : groupHabitId },
            { $push : { members : {$each: userIds} , habits : {$each: habitIds} }}
        )
        await Habit.updateMany({"_id":{$in:habitIds}},{$set:{"groupHabitId":groupHabitId}})
        await HabitRequestModel.deleteOne({from:groupHabit.admin, to:userId })

    } catch (error) {
        throw new Error(error)
    }
}
const RejectHabitRequestService = async(groupHabitId,userId) => {
  try {
    console.log(groupHabitId)
      let groupHabit = await GetGroupHabitService(groupHabitId)
      await HabitRequestModel.deleteOne({from:groupHabit.admin, to:userId })
  } catch (error) {
      throw new Error(error)
  }
}
const GetHabitRequests = async (userId) => {
    try {
        return await HabitRequest.find({to:userId}).populate({
          path:'from',
          select:['username']
        }) 
    } catch (error) {
        throw new Error(error)
    }
    
}

const GetUser = async (userId) => {
  try {
    return await User.findOne({ _id: userId }, { password: 0 });
  } catch (error) {
    throw new Error(error);
  }
};
const UpdateProfile = async (userId, user) => {
  try {
    const res = await User.findOne({ _id: userId });
    await User.updateOne(
      { _id: userId },
      {
        $set: {
          userBio: user.userBio,
          userAvatar: user.userAvatar,
        },
      }
    );
    console.log(res);
  } catch (error) {
    throw new Error(error);
  }
};
const GetUsersByName = async (query) => {
  try {
    return await User.find({ username: { $regex: query } }, { password: 0 });
  } catch (error) {
    throw new Error(error);
  }
};
const FollowUser = async (follows, to) => {
  try {
    await Follow.create({ follows: follows, to: to });
    await User.updateOne({ _id: follows }, { $inc: { followings: 1 } });
    await User.updateOne({ _id: to }, { $inc: { followers: 1 } });
  } catch (error) {
    throw new Error(error);
  }
};
const UnfollowUser = async (follows, to) => {
  try {
    await Follow.deleteOne({ $and: [{ follows: follows }, { to: to }] });
    await User.updateOne({ _id: follows }, { $inc: { followings: -1 } });
    await User.updateOne({ _id: to }, { $inc: { followers: -1 } });
  } catch (error) {
    throw new Error(error);
  }
};
const GetFollowers = async (userId) => {
  try {
    return await Follow.find({ to: userId }, { to: 0, _id: 0 }).populate({
      path: "follows",
      select: ["-password"],
    });
  } catch (error) {
    throw new Error(error);
  }
};
const GetFollowings = async (userId) => {
  try {
    return await Follow.find(
      { follows: userId },
      { follows: 0, _id: 0 }
    ).populate({
      path: "to",
      select: ["-password"],
    });
  } catch (error) {
    throw new Error(error);
  }
};
const GetMembers = async (userId) => {
  try {
    const users={}
    let followings = await Follow.find({ follows: userId },{ follows: 0, _id: 0 })
    .populate({ path: "to", select: ["-password"]  })
    followings.forEach(element => {
      const elem = {to:element.to}
      users[element.to._id]=elem
    });
    let followers = await Follow.find({ to: userId },{ to: 0, _id: 0 })
    .populate({ path: "follows", select: ["-password"]})
    followers.forEach(element => {
      const elem = {to:element.follows}
      users[element.follows._id]=elem
    });
    return  Object.values(users);
  } catch (error) {
    throw new Error(error);
  }
};
const isUserFollowing = async (userId, friendId) => {
  try {
    return await Follow.findOne({
      $and: [{ follows: userId }, { to: friendId }],
    });
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = {
  GetUsersByName,
  FollowUser,
  UnfollowUser,
  GetFollowers,
  GetFollowings,
  isUserFollowing,
  UpdateProfile,
  GetUser,
  GetMembers,
  GetHabitRequests,
  AcceptHabitRequestService,
  RejectHabitRequestService,
  UploadUserPictureUrl,
  GetUserPictureUrl
};
