const AuthModel = require("../models/AuthModels/AuthModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signupService = async (auth, res) => {
  try {
    const user = await AuthModel.findOne({ email: auth.email });
    
    if (!user) {
      const hashedPassword = await bcrypt.hash(auth.password, 6);
      await AuthModel.create({
        email: auth.email,
        password: hashedPassword,
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
        const { email } = user;

        const token = await jwt.sign(
          { email },
          process.env.JWT_AUTH_SECRET_KEY,
          { expiresIn: "50d" }
        );
        return token;
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
