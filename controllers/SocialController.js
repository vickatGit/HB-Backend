const { GetUsersByName } = require('../Services/SocialService')

const GetUsersByNameController = async(req,res,next) => {
    try {
        const result = await GetUsersByName(req.params.query)
        res.status(200).send({
            data:result
        })

    } catch (error) {
        res.status(500)
        next(error)
    }
}

module.exports = {
    GetUsersByNameController
}