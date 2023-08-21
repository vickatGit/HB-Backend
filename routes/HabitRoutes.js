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
    GetGroupHabitsController,
    AddMemberToHabitGroupController,
    UpdateGroupHabitController,
    DeleteGroupHabitController
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
router.route("/group/delete_habit/:groupHabitId").delete(DeleteGroupHabitController)
router.route("/group/remove_member/:groupHabitId").patch(RemoveMemberFromGroupHabitController)
router.route("/group/update_habit/:groupHabitId").patch(UpdateGroupHabitController)
router.route("/group/add_member/:groupHabitId").patch(AddMemberToHabitGroupController)

module.exports=router
