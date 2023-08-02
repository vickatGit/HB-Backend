const AddHabit=require('../Services/AddHabitService');

const AddHabitController=(req,res,next) =>{
    try{
        AddHabit(req.body)
    }catch(e){
        throw new Error(e)
    }
}

module.exports={
    AddHabitController
}