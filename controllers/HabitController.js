const AddHabit=require('../Services/AddHabitService');
const DeleteHabit=require('../Services/DeleteHabitService');
const UpdateHabitEntries=require('../Services/UpdateHabitEntriesService');
const UpdateHabit=require('../Services/UpdateHabitService');

const AddHabitController=(req,res,next) =>{
    try{
        AddHabit(req.body)
        res.status(200).send({
            "message":"Habit Added"
        })
    }catch(error){
        res.status(500)
        next(error)
    }
}

const DeleteHabitController=(req,res,next) =>{
    try{
        DeleteHabit(req.body)
        res.status(200).send({
            "message":"Habit Deleted Successfully"
        })
    }catch(e){
        res.status(500)
        next(error)
    }
}
const UpdateHabitEntriesController= async (req,res,next) =>{
    try{
        await UpdateHabitEntries(req.body._id,req.body)
        res.status(200).send({
            "message":"Habit Updated Successfully"
        })
    }catch(e){
        res.status(500)
        next(error)
    }
}
const UpdateHabitController=async (req,res,next) =>{
    try{
        await UpdateHabit(req.body)
        res.status(200).send({
            "message":"Habit Updated"
        })
    }catch(e){
        res.status(500)
        next(error)
    }
}

module.exports={
    AddHabitController,
    DeleteHabitController,
    UpdateHabitController,
    UpdateHabitEntriesController
}