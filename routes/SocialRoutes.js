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
    HomeController

} = require('../controllers/SocialController')

router.use(authValidator)
router.route("/get_users_by_username/:query").get(GetUsersByNameController)
router.route("/follow/:friendId").get(FollowUserController)
router.route("/unfollow/:friendId").delete(UnfollowUserController)
router.route("/followers").get(GetFollowersController)
router.route("/followings").get(GetFollowingsController)
router.route("/is_user_following/:friendId").get(isUserFollowingController)

router.route("/update_profile").patch(UpdateProfileController)
router.route("/get_profile/:userId").get(GetUserController)
router.route("/get_members").get(GetMembersController)
router.route('/user').get(HomeController)
module.exports = router