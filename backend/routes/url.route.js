const express = require("express");
const { authorization } = require("../middleware/authorize.middleware.js");
const {paginationMiddleware}=require("../middleware/pagination.middleware.js");
const {
  createShortUrl,
  getAllShortedUrl,
  getShortedUrlById,
  modifyShortedUrlById,
  deleteShortedUrlById,
} = require("../controller/url.controller.js");
const urlRouter = express.Router();

urlRouter.use(authorization);
urlRouter.post("/create",createShortUrl);
urlRouter.get("/get/all",paginationMiddleware,getAllShortedUrl);
urlRouter.get("/get/:id",getShortedUrlById);
urlRouter.patch("/modify/:id",modifyShortedUrlById);
urlRouter.delete("/delete/:id",deleteShortedUrlById);

module.exports = {
  urlRouter,
};
