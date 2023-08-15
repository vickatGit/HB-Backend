const jwt = require('jsonwebtoken')

const authValidator = (req,res,next) => {
    const authToken=req.headers.Authorization || req.headers.Authorization
    if(authToken){
        jwt.verify(authToken,process.env.JWT_AUTH_SECRET_KEY,(err,decoded) => {
            if(err){
                res.status(402)
                res.json({
                    code:402,
                    message:"Unauthorized login"
                })
            }
        })
    }
    else{
        res.status(400)
        res.json({
            code:400,
            message:"TOken not Provided"
        })
    }
    next()
}

module.exports = authValidator