const router=require('express').Router();

const{AddHabitController} = require('../controllers/HabitController')

router.route("/add_habit").post(AddHabitController)

module.exports=router
