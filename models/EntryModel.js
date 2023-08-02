const mongoose = require("mongoose");

const Entry = {
  habitId:{type : mongoose.Types.ObjectId },
  timestamp: { type: Date, required:true } ,
  score: { type: Number } ,
  completed: { type: Boolean, default: false } ,
};
module.exports={ Entry }
