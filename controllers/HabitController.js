const AddHabit = require("../Services/AddHabitService");
const DeleteHabit = require("../Services/DeleteHabitService");
const UpdateHabitEntries = require("../Services/UpdateHabitEntriesService");
const UpdateHabit = require("../Services/UpdateHabitService");
const GetHabits = require("../Services/GetHabitsService");
const GetHabit = require("../Services/GetHabitService");

const HabitValidationSchema = require("../models/validationSchema/HabitValidationModel");
const EntriesValidationSchema = require("../models/validationSchema/EntriesValidationSchema");

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
    AddHabit(req.body);
    res.status(200).send({
      message: "Habit Added",
    });
  } catch (error) {
    res.status(500);
    console.log(error);
    next(error);
  }
};

const DeleteHabitController = (req, res, next) => {
  try {
    DeleteHabit(req.params.id);
    res.status(200).send({
      message: "Habit Deleted Successfully",
    });
  } catch (e) {
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
  } catch (e) {
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
    await UpdateHabit(req.body);
    res.status(200).send({
      message: "Habit Updated",
    });
  } catch (e) {
    res.status(500);
    next(error);
  }
};
const GetHabitsController = async (req, res, next) => {
  console.log("GetHabitController");
  try {
    let result = await GetHabits();
    res.status(200).send({
      data: result,
    });
  } catch (e) {
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
    } catch (e) {
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
  GetHabitController
};
