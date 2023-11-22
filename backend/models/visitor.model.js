const mongoose=require('mongoose');

const VisitorSchema=new mongoose.Schema({
    ipAddress:{type:String,required:true},
    urlId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'url'},
    referFrom:{type:String}
},{timestamps:true});

const VisitorsModel=mongoose.model('visitors',VisitorSchema);

module.exports={
    VisitorsModel
}