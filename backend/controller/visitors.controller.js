const { VisitorsModel } = require("../models/visitor.model");

const getAllVisitors=async (req,res)=>{
    const {urlId}=req.params;
    try {
        const visitors=await VisitorsModel.find({urlId});
        return res.status(200).json({visitors}); 
    } catch (error) {
        return res.status(500).json({error:'Error while finding all visitors'});
    }
};

module.exports={
    getAllVisitors
}