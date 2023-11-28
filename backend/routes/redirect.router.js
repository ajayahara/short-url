const express=require('express');
const { redirectUrl } = require('../controller/redirect.controller');
const redirectRouter=express.Router();

redirectRouter.get('/:shortId',redirectUrl);
module.exports={
    redirectRouter
}