require('dotenv').config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/user.model");

const userRegistration = async (req, res) => {
  const { userName, email, password } = req.body;
  if (!userName || !email || !password) {
    return res.status(400).json({ message: "Some fields are missing" });
  }
  try {
    const isUserExist = await UserModel.findOne({
      $or: [{ userName }, { email }],
    });
    if (isUserExist) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const newUser = new UserModel({ userName, email, password: hashPassword });
    await newUser.save();
    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Error while registering" });
  }
};
const userLogin = async (req, res) => {
    const { userName, password } = req.body;
    if (!userName || !password) {
      return res.status(400).json({ message: "Some fields are missing" });
    }
  try {
    const user = await UserModel.findOne({userName});
    if(!user){
        return res.status(401).json({ message: 'User did not exist' });
    }
    const isValidPassword=await bcrypt.compare(password,user.password);
    if(!isValidPassword){
        return res.status(401).json({ message: 'Invalid credential' });
    }
    const token=jwt.sign({userId:user._id},process.env.SECRETKEY,{expiresIn:'3d'});
    return res.status(200).json({token});
  } catch (error) {
    return res.status(500).json({ error: "Error while login" });
  }
};

module.exports = {
  userRegistration,
  userLogin,
};
