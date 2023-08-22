const mongoose = require('mongoose')

const AuthModel = mongoose.Schema({
    email:{type : String , required : true},
    password:{type : String , required : true},
    username:{type : String , required : true},
    userAvatar:{type : String },
})

module.exports = mongoose.model("AuthModel",AuthModel)