const mongoose = require("mongoose");
const shortid = require("shortid");
const validator = require("validator");
const { UrlModel } = require("../models/url.model.js");
const { VisitorsModel } = require("../models/visitor.model.js");

const createShortUrl = async (req, res) => {
  const { originalUrl, title, description, startDate, expireDate } = req.body;
  const userId = req.userId;
  if (!originalUrl || !title || !description || !expireDate) {
    return res.status(400).json({ message: "Some fields are missing" });
  }
  if (!validator.isURL(originalUrl)) {
    return res.status(400).json({ message: "invalid Original Url" });
  }
  if (!validator.isDate(expireDate)) {
    return res.status(400).json({ message: "invalid Expiration Date" });
  }
  if (startDate && !validator.isDate(startDate)) {
    return res.status(400).json({ message: "invalid Start Date" });
  }
  try {
    const shortId = shortid.generate();
    console.log(shortId);
    const newUrl = new UrlModel({
      originalUrl,
      userId,
      title,
      description,
      startDate,
      expireDate,
      shortId,
    });
    await newUrl.save();
    return res.status(201).json({ newUrl });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Error while creating new short url" });
  }
};
const getAllShortedUrl = async (req, res) => {
  const userId = req.userId;
  try {
    const shortUrls = await UrlModel.find({ userId });
    return res.status(201).json({ shortUrls });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error while finding all short url" });
  }
};
const getShortedUrlById = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;
  try {
    const shortUrl = await UrlModel.findOne({
      userId,
      _id: new mongoose.Types.ObjectId(id),
    });
    return res.status(200).json({ shortUrl });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Error while finding short url by its id" });
  }
};
const modifyShortedUrlById = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;
  const { title, description, expireDate } = req.body;
  if (expireDate && !validator.isDate(expireDate)) {
    return res.status(400).json({ message: "invalid Expiration Date" });
  }
  try {
    const shortUrl = await UrlModel.findOne({
      userId,
      _id: new mongoose.Types.ObjectId(id),
    });
    if (!shortUrl) {
      return res
        .status(400)
        .json({ message: "No short url found with this id" });
    }
    await UrlModel.findByIdAndUpdate(id, {
      title: title || shortUrl.title,
      description: description || shortUrl.description,
      expireDate: expireDate || shortUrl.expireDate,
    });
    return res.status(200).json({ message: "Short url updated" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Error while updating short url by its id" });
  }
};
const deleteShortedUrlById = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;
  try {
    const shortUrl = await UrlModel.findOne({
      userId,
      _id: new mongoose.Types.ObjectId(id),
    });
    if (!shortUrl) {
      return res
        .status(400)
        .json({ message: "No short url found with this id" });
    }
    await UrlModel.findByIdAndDelete(id);
    await VisitorsModel.deleteMany({urlId:new mongoose.Types.ObjectId(id)});
    return res.status(200).json({ message: "Short url along with visitors deleted" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Error while deleting short url by its id" });
  }
};

module.exports = {
  createShortUrl,
  getAllShortedUrl,
  getShortedUrlById,
  modifyShortedUrlById,
  deleteShortedUrlById,
};
