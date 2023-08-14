const AuthModel = require("../models/AuthModels/AuthModel");
const jwt = require("jsonwebtoken");

const signupService = async (auth, res) => {
  try {
    const user = await AuthModel.findOne({ email: auth.email });
    console.log("user",auth,user)
    if (!user) {
      await AuthModel.create({
        email: auth.email,
        password: auth.password,
      });
    } else {
      res.status(409);
      throw new Error("User Already Exists!! Try Login ");
    }
  } catch (error) {
    throw new Error(error)
  }
};

const loginService = async (auth, res) => {
  try {
    const user = await AuthModel.findOne({ email: auth.email });
    if (user) {
      if (user.password == auth.password) {
        res.status(200);
        const { email } = user;

        const token = await jwt.sign(
          { email },
          process.env.JWT_AUTH_SECRET_KEY,
          { expiresIn: "50d" }
        );
        return token

        
      } else {
        res.status(401);
        throw new Error("Invalid Password");
      }
    } else {
      res.status(401);
      throw new Error("No User Found!! Try Signup ");
    }
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  loginService,
  signupService,
};
