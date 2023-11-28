const express = require("express");
const { authorization } = require("../middleware/authorize.middleware");
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
urlRouter.get("/get/all",getAllShortedUrl);
urlRouter.get("/get/:id",getShortedUrlById);
urlRouter.patch("/modify/:id",modifyShortedUrlById);
urlRouter.delete("/delete/:id",deleteShortedUrlById);

module.exports = {
  urlRouter,
};
