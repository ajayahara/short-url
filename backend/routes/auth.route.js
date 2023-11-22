const express=require('express');
const { userRegistration,userLogin } = require('../controller/auth.controller.js');
const authRouter=express.Router();

authRouter.post('/register',userRegistration);
authRouter.post('/login',userLogin);

module.exports={
    authRouter
}