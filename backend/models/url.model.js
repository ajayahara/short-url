const mongoose=require('mongoose');

const UrlSchema=new mongoose.Schema({
    originalUrl:{type:String,required:true},
    shortId:{type:String,required:true,unique:true},
    userId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'user'},
    title:{type:String,required:true},
    description:{type:String,required:true},
    status:{type:String,enum:['active','expired','draft'],default:'active'},
    startDate:{type:Date,default:Date.now()},
    stats:{
        totalVisitors:{type:Number,default:0},
        uniqueVisitors:{type:Number,default:0}
    }
},{timestamps:true});

const UrlModel=mongoose.model('url',UrlSchema);

module.exports={
    UrlModel
}
