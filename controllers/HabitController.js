const AddHabit = require("../Services/AddHabitService");
const {DeleteHabit, DeleteAllHabits} = require("../Services/DeleteHabitService");
const UpdateHabitEntries = require("../Services/UpdateHabitEntriesService");
const UpdateHabit = require("../Services/UpdateHabitService");
const GetHabits = require("../Services/GetHabitsService");
const GetHabit = require("../Services/GetHabitService");
const HabitValidationSchema = require("../models/HabitModels/validationSchema/HabitValidationModel");
const EntriesValidationSchema = require("../models/HabitModels/validationSchema/EntriesValidationSchema");

const GroupHabitValidationSchema = require("../models/HabitModels/validationSchema/GroupHabitValidationSchema");
const GroupAddHabit = require("../Services/AddGroupHabitService");
const GroupRemoveMemberFromHabit = require("../Services/RemoveMemberFromHabitGroupService");
const GetGroupHabit = require("../Services/GetGroupHabitService");
const GetGroupHabits = require("../Services/GetGroupHabitsService");
const AddMemberToHabitGroup = require("../Services/AddMemberToHabitGroupService");
const UpdateGroupHabitService = require("../Services/UpdateGroupHabitService");
const DeleteGroupHabitService = require("../Services/DeletGroupHabitService");


const AddHabitController = async (req, res, next) => {
  let { error, value } = await HabitValidationSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    console.log("error", error);
    res.status(422);
    next(error);
  }
  try {
    const result = await AddHabit(req.body,req.user.id);
    res.status(200).send({
      habitId:result._id,
      message: "Habit Added",
    });
  } catch (error) {
    res.status(500);
    console.log(error);
    next(error);
  }
};


const GetGroupHabitsController = async(req,res,next) => {
  try {
    const result = await GetGroupHabits(req.user.id)
    res.json({
      data:result
    })
  } catch (error) {
    res.status(500);
    console.log(error);
    next(error);
  }
}
const GetGroupHabitController = async(req,res,next) => {
  try {
    const result = await GetGroupHabit(req.params.groupId)
    res.status(200)
    res.json({
      data:result
    })
  } catch (error) {
    next(error)
  }
}

const RemoveMemberFromGroupHabitController = async(req,res,next) => {
  try {
    await GroupRemoveMemberFromHabit(req.params.groupHabitId,req.body.userIds)
    res.status(200).send({
      message: "Removed Successfully",
    });
  } catch (error) {
    res.status(500);
    console.log(error);
    next(error);
  }
}
const AddMemberToHabitGroupController = async(req,res,next) => {
  try {
    console.log("controller add member userId ",req.body.userIds)
    await AddMemberToHabitGroup(req.params.groupHabitId,req.body.userIds)
    res.status(200)
    res.json({
      message:"Member Added to Group Successfully"
    })
  } catch (error) {
    res.status(500);
    console.log(error);
    next(error);
  }
}

const GroupHabitAddController = async(req,res,next) => {
  let { error, value } = await GroupHabitValidationSchema.validate(req.body, {
    abortEarly: false,
  });
  if(error){
    console.log("error", error);
    res.status(422);
    next(error);
  }
  try {
    console.log("userId controller add group ", req.user.id)
    await GroupAddHabit(req.body,req.user.id,req.params.adminHabitId);
    res.status(200).send({
      message: "Habit Group Created",
    });
  } catch (error) {
    res.status(500);
    console.log(error);
    next(error);
  }
}

const DeleteHabitController = async (req, res, next) => {
  try {
    await DeleteHabit(req.params.id);
    res.status(200).send({
      message: "Habit Deleted Successfully",
    });
  } catch (error) {
    res.status(500);
    next(error);
  }
};

const DeleteGroupHabitController = async (req, res, next) => {
  try {
    await DeleteGroupHabitService(req.params.groupHabitId);
    res.status(200).send({
      message: "Habit Group Deleted Successfully",
    });
  } catch (error) {
    res.status(500);
    next(error);
  }
};
const UpdateGroupHabitController = async(req,res,next) => {
  let {error,value} = GroupHabitValidationSchema.validate(req.body)
  if(error){
    res.status(422)
    next()
  }
  try {
    await UpdateGroupHabitService(req.body,req.params.groupHabitId)  
    res.status(200).send({
      message:"Group Habit Updated"
    })
  } catch (error) {
    next(error)
  }


}
const DeleteAllController = async (req, res, next) => {
  try {
    await DeleteAllHabits();
    res.status(200).send({
      message: "Habit Deleted Successfully",
    });
  } catch (error) {
    res.status(500);
    next(error);
  }
};
const UpdateHabitEntriesController = async (req, res, next) => {
    const {error,value} = await EntriesValidationSchema.validate(req.body)
    if (error) {
        console.log("error", error);
        res.status(422);
        next(error);
      }
  try {
    await UpdateHabitEntries(req.params.id, req.body.entries);
    res.status(200).send({
      message: "Habit Updated Successfully",
    });
  } catch (error) {
    res.status(500);
    next(error);
  }
};
const UpdateHabitController = async (req, res, next) => {
  let { error, value } = await HabitValidationSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    console.log("error", error);
    res.status(422);
    next(error);
  }
  try {
    await UpdateHabit(req.params.id, req.body);
    res.status(200).send({
      message: "Habit Updated",
    });
  } catch (error) {
    res.status(500);
    next(error);
  }
};
const GetHabitsController = async (req, res, next) => {
  console.log("GetHabitController");
  try {
    let result = await GetHabits(req.user.id);
    res.status(200).send({
      data: result,
    });
  } catch (error) {
    res.status(500);
    next(error);
  }
};
const GetHabitController = async (req, res, next) => {
    console.log("GetHabitController");
    try {
      let result = await GetHabit(req.params.id);
      res.status(200).send({
        data: result,
      });
    } catch (error) {
      res.status(500);
      next(error);
    }
  };
module.exports = {
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
};
