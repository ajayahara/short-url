const express=require('express');
const { getAllVisitors } = require('../controller/visitors.controller');
const { authorization } = require('../middleware/authorize.middleware');
const {paginationMiddleware}=require("../middleware/pagination.middleware.js")

const visitorsRouter=express.Router();

visitorsRouter.use(authorization)
visitorsRouter.get('/get/:urlId',paginationMiddleware,getAllVisitors);

module.exports={
    visitorsRouter
}