const express=require('express');
const { authorization } = require('../middleware/authorize.middleware');
const urlRouter=express.Router();

urlRouter.use(authorization)
urlRouter.post('/create',(req,res)=>{
    console.log(req.userId)
  return res.status(200).json({message:'You are in create page'})  
})

module.exports={
    urlRouter
}