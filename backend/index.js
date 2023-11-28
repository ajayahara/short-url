require('dotenv').config();
const express=require('express');
const cors=require('cors');

// Config import 
const {connection}=require('./config/db')
// Routes import
const {authRouter}=require('./routes/auth.route.js');
const {urlRouter}=require('./routes/url.route.js');
const {userRouter}=require('./routes/user.route.js');
const {visitorsRouter}=require('./routes/visitors.route.js');
const { redirectRouter } = require('./routes/redirect.router.js');

const app=express();
const PORT=process.env.PORT||3000

// Middleware usage
app.use(cors());
app.use(express.json());

// Routes usage
app.use('/',redirectRouter)
app.use('/auth',authRouter);
app.use('/user',userRouter);
app.use('/url',urlRouter);
app.use('/visitors',visitorsRouter)

app.get('/',(req,res)=>{
    res.json({message:'You are on homepage'})
})
app.listen(PORT,async ()=>{
    try {
        await connection;
        console.log(`App is running on port ${PORT} \nConnected to Db`);
    } catch (error) {
        console.log('Error while Connecting to Db:',error);
    }
});