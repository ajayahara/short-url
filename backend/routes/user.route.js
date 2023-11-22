const express=require('express');
const { getAllUsers } = require('../controller/user.controller');
const userRouter=express.Router();

userRouter.get('/all',getAllUsers);

module.exports={
    userRouter
}