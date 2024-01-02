const mongoose = require('mongoose')

const Follow = mongoose.Schema({
    follows:{type : mongoose.Types.ObjectId , ref : 'AuthModel'},
    to:{type : mongoose.Types.ObjectId , ref : 'AuthModel'}
})

module.exports = mongoose.model("Follow",Follow)