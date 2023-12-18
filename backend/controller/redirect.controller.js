const { VisitorsModel } = require("../models/visitor.model");
const { UrlModel } = require("../models/url.model");

const redirectUrl=async (req,res)=>{
    const {shortId}=req.params;
    const ip=req.ip;
    const referFrom=req.get('Referer') || req.get('Referrer')||'No refer';
    try {
        const shortUrl=await UrlModel.findOne({shortId});
        if(!shortUrl){
            return res.status(400).json({message:'No short url found with this shortid'});
        }
        const currentDate = new Date();
        if (currentDate > shortUrl.expireDate) {
            if (shortUrl.status !== 'expired') {
                await UrlModel.findByIdAndUpdate(shortUrl._id, { status: 'expired' });
            }
            return res.status(400).json({ message: 'URL expired' });
        }
        let updatedStats={
            totalVisitors:shortUrl.stats.totalVisitors,
            uniqueVisitors:shortUrl.stats.uniqueVisitors
        }
        const visitor=await VisitorsModel.findOne({ipAdress:ip});
        if(!visitor){
            updatedStats.uniqueVisitors++;
        }
        updatedStats.totalVisitors++;
        const newVisitor=new VisitorsModel({
            ipAddress:ip,
            urlId:shortUrl._id,
            referFrom:referFrom
        })
        await newVisitor.save();
        await UrlModel.findByIdAndUpdate(shortUrl._id,{
            stats:updatedStats
        })
        return res.redirect(shortUrl.originalUrl)
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:'Error while finding all visitors'});
    }
};

module.exports={
    redirectUrl
}