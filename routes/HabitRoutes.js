const router=require('express').Router();
const authValidator = require('../middlewares/ValidationMiddlewares/AuthValidation')

const{
    AddHabitController,
    DeleteHabitController,
    UpdateHabitController,
    UpdateHabitEntriesController,
    GetHabitsController,
    GetHabitController,
    DeleteAllController,

    GroupHabitAddController,
    RemoveMemberFromGroupHabitController,
    GetGroupHabitController,
    GetGroupHabitsController
} = require('../controllers/HabitController')

router.use(authValidator)

router.route("/add_habit").post(AddHabitController)
router.route("/delete_habit/:id").delete(DeleteHabitController)
router.route("/update_habit/:id").put(UpdateHabitController)
router.route("/update_habit_entries/:id").patch(UpdateHabitEntriesController)
router.route("/get_habits").get(GetHabitsController)
router.route("/get_habit/:id").get(GetHabitController)
router.route("/delete_all").get(DeleteAllController)

//Group habit

router.route("/group/add_habit").post(GroupHabitAddController)
router.route("/group/get_habit/:groupId").get(GetGroupHabitController)
router.route("/group/get_habits").get(GetGroupHabitsController)
router.route("/group/delete_habit/:habitId").delete()
router.route("/group/remove_member/:groupHabitId/:userId").patch(RemoveMemberFromGroupHabitController)

module.exports=router
