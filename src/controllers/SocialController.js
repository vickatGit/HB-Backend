const UpdateUserValidation = require("../models/AuthModels/ValidationModel/UpdateUserValidation");
const {
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
  GetUserPictureUrl,
  DeleteUserAccount
} = require("../Services/SocialService");
const GetUi = require("../Services/UiService")



const GetUserPictureUrlController = async(req,res,next) => {
  try {
    const result = await GetUserPictureUrl(req.user.id)
    res.status(200).send({
      url:result
    })
  } catch (error) {
    console.log("GetUserPictureUrl",error)
  }
}
const UploadUserPictureUrlController = async(req,res,next) => {
  try {
    const data = await UploadUserPictureUrl(req.user.id)
    res.status(200).send({
      url:data
    })
  } catch (error) {
    console.log("UploadUserPictureUrlController",error)
  }
}

const deleteUserAccountController = async(req,res,next) => {
  try {
    const result = await DeleteUserAccount(req.user.id)
    res.status(200).send({
      msg:"account deleted successfully"
    })
  } catch (error) {
    console.log("deleteUserAccountController",error)
    next()
  }
}
const GetUserController = async(req,res,next) => {
    try {
        const result = await GetUser(req.params.userId)
        const avatarResult = await GetUserPictureUrl(req.params.userId)
        res.status(200).send({
            data:result,
            avatarUrl:avatarResult
        })
    } catch (error) {
        next(error)
    }
}
const GetUsersByNameController = async (req, res, next) => {
  try {
    const result = await GetUsersByName(req.params.query);
    res.status(200).send({
      data: result,
    });
  } catch (error) {
    res.status(500);
    next(error);
  }
};
const FollowUserController = async (req, res, next) => {
  try {
    await FollowUser(req.user.id, req.params.friendId);
    res.status(201).send({
      message: "Followed",
    });
  } catch (error) {
    next(error);
  }
};
const UnfollowUserController = async (req, res, next) => {
  try {
    await UnfollowUser(req.user.id, req.params.friendId);
    res.status(201).send({
      message: "Unfollowed",
    });
  } catch (error) {
    next(error);
  }
};
const GetFollowersController = async (req, res, next) => {
  try {
    const result = await GetFollowers(req.user.id);
    res.status(200).send({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const GetFollowingsController = async (req, res, next) => {
  try {
    const result = await GetFollowings(req.user.id);
    res.status(200).send({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const isUserFollowingController = async (req, res, next) => {
  try {
    const result = await isUserFollowing(req.user.id, req.params.friendId);
    console.log("isUSerFollowing",result)
    res.status(200).send({
      isFollowing: result ? true : false,
    });
  } catch (error) {
    next(error);
  }
};

const UpdateProfileController = async (req, res, next) => {
  const { error, value } = await UpdateUserValidation.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    console.log("error", error);
    res.status(422);
    next(error);
  }
  try {
    await UpdateProfile(req.user.id, req.body);
    res.status(200).send({
      msg: "Profile updated",
    });
  } catch (error) {
    next(error);
  }
};

const GetHabitRequestsController = async(req,res,next) => {
  try {
    const data = await GetHabitRequests(req.user.id)
    res.status(200).send({
      data:data
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

const AcceptHabitRequestController = async(req,res,next) => {
  try {
    await AcceptHabitRequestService(req.params.habitGroupId,req.user.id)
    res.status(200).send({
      msg:"Successfully Joined to Habit Group"
    })
  } catch (error) {
    next(error)
  }
}

const RejectHabitRequestController = async(req,res,next) => {
  try {
    await RejectHabitRequestService(req.params.habitGroupId,req.user.id)
    res.status(200).send({
      msg:"Successfully Joined to Habit Group"
    })
  } catch (error) {
    next(error)
  }
}
const GetMembersController = async(req,res,next) => {
  try {
    const result = await GetMembers(req.user.id)
    res.status(200).send({
      data:result
    })
  } catch (error) {
    next(error)
  }
}
const HomeController = async (req,res,next) => {
  try {
    user = await GetUser(req.user.id)
    res.status(200).json({
      data:await GetUi(user,req.user.id)
    })
  } catch (error) {
    console.log("home ui ", error)
  }
  
}

module.exports = {
  GetUsersByNameController,
  FollowUserController,
  UnfollowUserController,
  GetFollowersController,
  GetFollowingsController,
  isUserFollowingController,
  UpdateProfileController,
  GetUserController,
  GetMembersController,
  HomeController,
  GetHabitRequestsController,
  AcceptHabitRequestController,
  RejectHabitRequestController,
  UploadUserPictureUrlController,
  GetUserPictureUrlController,
  deleteUserAccountController
};
