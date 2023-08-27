const User = require("../models/AuthModels/AuthModel");
const Follow = require("../models/SocialModels/FollowModel");


const GetUser = async(userId) => {
  try {
    return await User.findOne({ _id:userId }, { password: 0 });
  } catch (error) {
    throw new Error(error);
  }
}
const UpdateProfile = async (userId, user) => {
  try {
    const res = await User.findOne({ _id: userId })
    await User.updateOne({ _id: userId }, { $set: {
      userBio:user.userBio,
      userAvatar:user.userAvatar
    } });
    console.log(res)
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
    await Follow.create({follows: follows,to: to,});
    await User.updateOne({_id:follows},{ $inc : {followings:1} })
    await User.updateOne({_id:to},{ $inc : {followers:1} })
  } catch (error) {
    throw new Error(error);
  }
};
const UnfollowUser = async (follows, to) => {
  try {
    await Follow.deleteOne({ $and: [{ follows: follows }, { to: to }] });
    await User.updateOne( {_id:follows} ,{ $inc : {followings:-1} })
    await User.updateOne({_id:to},{ $inc : {followers:-1} })
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
const GetMembers =  async(userId) => {
  try {
    return await Follow.find(
      {$or : [{follows:userId},{to:userId}]},
      {follows:0,_id:0}
      ).populate({
      path: "to",
      select: ["-password"],
    });
  } catch (error) {
    throw new Error(error)
  }
}
const isUserFollowing = async (userId, friendId) => {
  try {
    return await Follow.findOne({$and:[
      { follows: userId }, { to: friendId }
    ]});
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
  GetMembers
};
