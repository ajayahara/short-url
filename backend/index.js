require('dotenv').config();
const express=require('express');
const cors=require('cors');

// App import 

const {connection}=require('./config/db')

const app=express();
const PORT=process.env.PORT||3000
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.json({message:'You are on homepage'})
})
app.listen(PORT,async ()=>{
    try {
        // await connection;
        console.log(`App is running on port ${PORT}`);
    } catch (error) {
        console.log('Error while Connecting to Db:',error);
    }
});