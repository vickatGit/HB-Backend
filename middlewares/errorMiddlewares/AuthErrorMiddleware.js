const { error } = require("../../models/AuthModels/ValidationModel/AuthValidation");

const authErrorHandler = (error,req,res,next) => {
    const resCode = res.statusCode || 500
    switch(resCode){
        case 422 : {
            res.json({
                code:resCode,
                errors:error
            })
        }
        case 409 : {
            res.json({
                error:error.message
            })
        }
        case 500 : {
            res.json({
                errors:error.message
            })
        }
    }
    next()
}
module.exports = authErrorHandler