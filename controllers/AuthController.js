const { loginService, signupService } = require("../Services/AuthService");
const AuthValModel = require("../models/AuthModels/ValidationModel/AuthValidation");

const signup = async (req, res, next) => {
  let { error, value } = await AuthValModel.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    res.status(422);
    next(error);
  }
  try {
    await signupService(req.body, res);
    res.status(201);
      res.json({
        message: "Registration Successful",
        status:true
      });
  } catch (error) {
    next(error);
    console.log("409 err ",error)
  }
};

const login = async (req, res, next) => {
  try {
    const {token,userId} = await loginService(req.body, res);
    res.status(200)
    res.json({
        message:"Login successful",
        token:token,
        userId:userId,
        success:true
    })
  } catch (error) {
    console.log("login",res.statusCode,error)
    next(error);
  }
};
module.exports = {
  signup,
  login,
};
