const router=require('express').Router();
const authValidator = require('../middlewares/ValidationMiddlewares/AuthValidation')
const {
    GetUsersByNameController,
    FollowUserController,
    UnfollowUserController,
    GetFollowingsController,
    GetFollowersController,
    isUserFollowingController

} = require('../controllers/SocialController')

router.use(authValidator)
router.route("/get_users_by_username/:query").get(GetUsersByNameController)
router.route("/follow/:friendId").get(FollowUserController)
router.route("/unfollow/:friendId").delete(UnfollowUserController)
router.route("/followers").get(GetFollowersController)
router.route("/followings").get(GetFollowingsController)
router.route("/is_user_following/:friendId").get(isUserFollowingController)
module.exports = router