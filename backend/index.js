require('dotenv').config();
const express=require('express');
const cors=require('cors');

const app=express();
const PORT=process.env.PORT||8080
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.json({message:'You are on homepage'})
})
app.listen(PORT,async ()=>{
    console.log(`App is running on port ${PORT}`)
});