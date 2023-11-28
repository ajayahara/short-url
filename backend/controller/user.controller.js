const { UserModel } = require('../models/user.model.js');


const getAllUsers=async (req,res)=>{
    const {page,limit,blocked}=req.query;
    const pageToBe=page||1;
    const limitToBe=limit||10;
    const skip=(pageToBe-1)*limitToBe;
    let filter={};
    if(blocked==='true'){
        filter={blocked:true};
    }else{
        filter={blocked:false};
    }
    try {
        const users=await UserModel.find(filter).skip(skip).limit(limitToBe);
        return res.status(200).json({users}); 
    } catch (error) {
        return res.status(500).json({error:'Error while finding all users'})
    }
};

const getUserByItsId=async (req,res)=>{
    const {id}=req.params;
    try {
        const user=await UserModel.findById(id);
        if(!user){
            return res.status(400).json({message:'No user found with this id'})
        }
        return res.status(200).json({user}); 
    } catch (error) {
        return res.status(500).json({error:'Error while finding user by its Id'})
    }
};
// Not updates/not working
const modifyUserByItsId=async (req,res)=>{
    const {id}=req.params;
    try {
        const user=await UserModel.findById(id);
        return res.status(200).json({user}); 
    } catch (error) {
        return res.status(500).json({error:'Error while finding user by its Id'})
    }
};

const deleteUserByItsId=async (req,res)=>{
    const {id}=req.params;
    try {
        const user=await UserModel.findById(id);
        return res.status(200).json({user}); 
    } catch (error) {
        return res.status(500).json({error:'Error while finding user by its Id'})
    }
};

module.exports={
    getAllUsers,
    getUserByItsId,
    modifyUserByItsId,
    deleteUserByItsId
}