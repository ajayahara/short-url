const express=require('express');
const { getAllVisitors } = require('../controller/visitors.controller');
const visitorsRouter=express.Router();

visitorsRouter.get('/get/:urlId',getAllVisitors);

module.exports={
    visitorsRouter
}