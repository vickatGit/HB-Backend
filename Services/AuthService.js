const AuthModel = require("../models/AuthModels/AuthModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { use } = require("../routes/AuthRoutes");

const signupService = async (auth, res) => {
  try {
    const user = await AuthModel.findOne({ email: auth.email });
    
    if (!user) {
      const hashedPassword = await bcrypt.hash(auth.password, 6);
      await AuthModel.create({
        email: auth.email,
        password: hashedPassword,
        username: auth.username
      });
    } else {
      res.status(409);
      throw new Error("User Already Exists!! Try Login ");
    }
  } catch (error) {
    throw new Error(error);
  }
};

const loginService = async (auth, res) => {
  try {
    const user = await AuthModel.findOne({ email: auth.email });
    if (user) {
      const isPasswordMatched = await bcrypt.compare(
        auth.password,
        user.password
      );
      if (isPasswordMatched) {
        res.status(200);
        console.log(user)
        await AuthModel.updateOne({_id:user._id},{$set:{fcmToken:auth.fcmToken}})
        const token = await jwt.sign({
          user : {
            email : user.email,
            id : user._id
          } },
          process.env.JWT_AUTH_SECRET_KEY,
          { expiresIn: "50d" }
        );
        return {
          token:token,
          userId:user._id,
          userName:user.username
        }
      } else {
        res.status(400);
        throw new Error("Invalid Password");
      }
    } else {
      res.status(409);
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
