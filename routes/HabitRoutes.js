const router=require('express').Router();

const{AddHabitController,DeleteHabitController,UpdateHabitController,UpdateHabitEntriesController} = require('../controllers/HabitController')

router.route("/add_habit").post(AddHabitController)
router.route("/delete_habit").get(DeleteHabitController)
router.route("/update_habit").post(UpdateHabitController)
router.route("/update_habit_entries").post(UpdateHabitEntriesController)

module.exports=router
