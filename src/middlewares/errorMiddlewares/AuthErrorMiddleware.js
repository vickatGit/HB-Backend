const { error } = require("../../models/AuthModels/ValidationModel/AuthValidation");

const authErrorHandler = (error,req,res,next) => {
    const resCode = res.statusCode || 500
    switch(resCode){
        case 422 : {
            res.json({
                code:422,
                success : false,
                errors:error
            })
        }
        case 401 : {
            res.json({
                code:401,
                success : false,
                error:error.message
            })
        }
        case 402 : {
            res.json({
                code:402,
                success : false,
                error:error.message
            })
        }
        case 409 : {
            console.log("409")
            res.json({
                code:409,
                success : false,
                error:error.message
            })
        }
        case 500 : {
            res.json({
                code:500,
                success : false,
                errors:error.message
            })
        }
    }
    next()
}
module.exports = authErrorHandler