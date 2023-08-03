const habitErrorHandler= (error,req,res,next) => {
    const resCode=error.statuscode || 500
    switch(resCode){
        case 400 :{
            res.json({
                code:resCode,
                message:error.message
            })
        }
        case 500 : {
            res.json({
                code:resCode,
                message:"Internal Server Error"
            })
        }
    }
}

module.exports = habitErrorHandler