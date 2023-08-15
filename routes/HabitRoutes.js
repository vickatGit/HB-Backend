const router=require('express').Router();
const authValidator = require('../middlewares/ValidationMiddlewares/AuthValidation')

const{
    AddHabitController,
    DeleteHabitController,
    UpdateHabitController,
    UpdateHabitEntriesController,
    GetHabitsController,
    GetHabitController,
    DeleteAllController
} = require('../controllers/HabitController')

router.use(authValidator)

router.route("/add_habit").post(AddHabitController)
router.route("/delete_habit/:id").delete(DeleteHabitController)
router.route("/update_habit/:id").put(UpdateHabitController)
router.route("/update_habit_entries/:id").patch(UpdateHabitEntriesController)
router.route("/get_habits").get(GetHabitsController)
router.route("/get_habit/:id").get(GetHabitController)
router.route("/delete_all").get(DeleteAllController)

module.exports=router
