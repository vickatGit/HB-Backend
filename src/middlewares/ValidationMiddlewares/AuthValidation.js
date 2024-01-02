const jwt = require('jsonwebtoken')

const authValidator = (req,res,next) => {
    let authToken=req.headers.Authorization || req.headers.authorization
    console.log("auth token ",authToken)
    if(authToken && authToken.startsWith("Bearer") ){
        authToken = authToken.split(" ")[1]
        jwt.verify(authToken,process.env.JWT_AUTH_SECRET_KEY,(err,decoded) => {
            if(err){
                res.status(402)
                res.json({
                    code:402,
                    message:"Unauthorized login"
                })
            }
            console.log("auth",decoded)
            req.user=decoded.user
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