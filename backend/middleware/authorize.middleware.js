require('dotenv').config();
const jwt=require('jsonwebtoken');

const authorization=(req,res,next)=>{

    const token = req.headers.authorizationtoken;
    if(token==null||token==undefined) return res.status(401).json({message:'Missing authorization token'});
    jwt.verify(token,process.env.SECRETKEY,(err, user) => {
        if (err) return res.sendStatus(403);
        req.userId = user.userId;
        next();
      });
};
module.exports={
    authorization
}