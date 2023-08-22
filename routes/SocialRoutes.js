const router=require('express').Router();
const authValidator = require('../middlewares/ValidationMiddlewares/AuthValidation')
const {GetUsersByNameController} = require('../controllers/SocialController')

router.use(authValidator)
router.route("/get_users_by_username/:query").get(GetUsersByNameController)
module.exports = router