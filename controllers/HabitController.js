const AddHabit=require('../Services/AddHabitService');
const DeleteHabit=require('../Services/DeleteHabitService');
const UpdateHabitEntries=require('../Services/UpdateHabitEntriesService');
const UpdateHabit=require('../Services/UpdateHabitService');

const AddHabitController=(req,res,next) =>{
    try{
        AddHabit(req.body)
        res.send("send")
    }catch(e){
        throw new Error(e)
    }
}

const DeleteHabitController=(req,res,next) =>{
    try{
        DeleteHabit(req.body)
        res.send("send")
    }catch(e){
        throw new Error(e)
    }
}
const UpdateHabitEntriesController= async (req,res,next) =>{
    try{
        await UpdateHabitEntries(req.body._id,req.body)
        res.send("updated")
    }catch(e){
        throw new Error(e)
    }
}
const UpdateHabitController=async (req,res,next) =>{
    try{
        await UpdateHabit(req.body)
        res.send("send")
    }catch(e){
        throw new Error(e)
    }
}

module.exports={
    AddHabitController,
    DeleteHabitController,
    UpdateHabitController,
    UpdateHabitEntriesController
}