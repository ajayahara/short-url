const express=require('express');
const { getAllVisitors } = require('../controller/visitors.controller');
const { authorization } = require('../middleware/authorize.middleware');
const visitorsRouter=express.Router();

visitorsRouter.use(authorization)
visitorsRouter.get('/get/:urlId',getAllVisitors);

module.exports={
    visitorsRouter
}