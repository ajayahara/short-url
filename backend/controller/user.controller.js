const { UserModel } = require('../models/user.model.js');


const getAllUsers=async (req,res)=>{
    try {
        const allUsers=await UserModel.find();
        return res.status(200).json({users:allUsers}); 
    } catch (error) {
        return res.status(500).json({error:'Error while finding all users'})
    }
};

const getUserByItsId=async (req,res)=>{
    const {id}=req.params;
    try {
        const user=await UserModel.findById(id);
        return res.status(200).json({user}); 
    } catch (error) {
        return res.status(500).json({error:'Error while finding all users'})
    }
};

module.exports={
    getAllUsers,
    getUserByItsId
}