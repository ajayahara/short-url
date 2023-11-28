const express = require("express");
const {
  getAllUsers,
  getUserByItsId,
  modifyUserByItsId,
  deleteUserByItsId,
} = require("../controller/user.controller");
const userRouter = express.Router();

userRouter.get("get/all", getAllUsers);
userRouter.get("get/:id", getUserByItsId);
userRouter.patch("/modify/:id", modifyUserByItsId);
userRouter.delete("/delete/:id", deleteUserByItsId);

module.exports = {
  userRouter,
};
