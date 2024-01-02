const mongoose = require("mongoose");

const GroupEntry = mongoose.Schema({
  timestamp: { type: Date, required:true } ,
  score: { type: Number } ,
  completed: { type: Boolean, default: false } ,
});
module.exports=mongoose.Model("GroupEntry",GroupEntry)
