const router=require('express').Router();
const authValidator = require('../middlewares/ValidationMiddlewares/AuthValidation')
const {
    GetUsersByNameController,
    FollowUserController,
    UnfollowUserController,
    GetFollowingsController,
    GetFollowersController,
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

} = require('../controllers/SocialController')

router.use(authValidator)
router.route("/get_users_by_username/:query").get(GetUsersByNameController)
router.route("/follow/:friendId").get(FollowUserController)
router.route("/unfollow/:friendId").delete(UnfollowUserController)
router.route("/followers").get(GetFollowersController)
router.route("/followings").get(GetFollowingsController)
router.route("/is_user_following/:friendId").get(isUserFollowingController)

router.route("/update_profile").patch(UpdateProfileController)
router.route("/delete").post(deleteUserAccountController)
router.route("/get_profile/:userId").get(GetUserController)
router.route("/get_members").get(GetMembersController)
router.route('/user').get(HomeController)
router.route('/habit_requests').get(GetHabitRequestsController)
router.route('/accept_habit_request/:habitGroupId').get(AcceptHabitRequestController)
router.route('/reject_habit_request/:habitGroupId').get(RejectHabitRequestController)
router.route('/avatar_upload_url').get(UploadUserPictureUrlController)
router.route('/avatar').get(GetUserPictureUrlController)
module.exports = router