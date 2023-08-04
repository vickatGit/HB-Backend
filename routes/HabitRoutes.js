const router=require('express').Router();

const{AddHabitController,DeleteHabitController,UpdateHabitController,UpdateHabitEntriesController,GetHabitController} = require('../controllers/HabitController')

router.route("/add_habit").post(AddHabitController)
router.route("/delete_habit/:id").delete(DeleteHabitController)
router.route("/update_habit").put(UpdateHabitController)
router.route("/update_habit_entries").patch(UpdateHabitEntriesController)
router.route("/get_habits").get(GetHabitController)

module.exports=router
