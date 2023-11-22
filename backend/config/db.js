require('dotenv').config();
const mongoose=require('mongoose')
const URI=process.env.URI
const connection=mongoose.connect(URI);
module.exports={
    connection
}