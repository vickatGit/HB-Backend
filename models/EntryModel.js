const mongoose = require("mongoose");

const Entry = mongoose.Schema({
  timestamp: { type: Date, required:true } ,
  score: { type: Number } ,
  completed: { type: Boolean, default: false } ,
});
module.exports={
    Entry
}
