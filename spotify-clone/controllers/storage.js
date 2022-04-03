const { storageModel } = require('../models');
const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");
const fs = require('fs');
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${ __dirname }/../storage`;
/**
 * get storage list
 * @param req
 * @param res
 */
const getStorages = async (req, res) => {
  try {
    const data = await storageModel.find({});
    res.send({ data });
  } catch (err) {
    handleHttpError(res, err);
  }
}

/**
 * get storage by id
 * @param req
 * @param res
 */
const getStorage = async (req, res) => {
  try {
    const body = matchedData(req);
    const { id } = body;
    const data = await storageModel.findById(id);
    res.send({ data });
  } catch (err) {
    handleHttpError(res, err);
  }
}

/**
 * create a storage
 * @param req
 * @param res
 */
const createStorage = async (req, res) => {
  try {
    const { file } = req;
    const data = await storageModel.create({
      filename: file.filename,
      url: `${ PUBLIC_URL }/${ file.filename }`
    });
    res.send({ data });
  } catch (err) {
    handleHttpError(res, err);
  }
}

/**
 * update a storage
 * @param req
 * @param res
 */
const updateStorage = (req, res) => {
  try {

  } catch (err) {
    handleHttpError(res, err);
  }
}

/**
 * delete a storage
 * @param req
 * @param res
 */
const deleteStorage = async (req, res) => {
  try {
    const body = matchedData(req);
    const { id } = body;
    const data = await storageModel.findById(id);
    await storageModel.deleteOne({ _id: id });
    const filePath = `${ MEDIA_PATH }/${ data.filename }`;
    fs.unlinkSync(filePath);
    res.send({
      filePath,
      deleted: true
    });
  } catch (err) {
    handleHttpError(res, err);
  }
}

module.exports = {
  getStorages,
  getStorage,
  createStorage,
  updateStorage,
  deleteStorage,
};