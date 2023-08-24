const mongoose = require('mongoose')

const AuthModel = mongoose.Schema({
    email:{type : String , required : true},
    password:{type : String , required : true},
    username:{type : String , required : true},
    userAvatar:{type : String , default:null },
    userBio:{type : String , default:null  },
    followers:{type : Number , default:0 },
    followings:{type : Number , default:0 },
})

module.exports = mongoose.model("AuthModel",AuthModel)