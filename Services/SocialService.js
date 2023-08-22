const User = require('../models/AuthModels/AuthModel')

const GetUsersByName = async(query) => {
    try {
        return await User.find({username:{$regex:query}},{password:0})
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = {
    GetUsersByName
}