const { tracksModel } = require('../models');
const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");

/**
 * get track list
 * @param req
 * @param res
 */
const getTracks = async (req, res) => {
  try {
    const data = await tracksModel.findAllData({});
    res.send({ data });
  } catch (error) {
    handleHttpError(res, error);
  }
}

/**
 * get track by id
 * @param req
 * @param res
 */
const getTrack = async (req, res) => {
  try {
    const body = matchedData(req);
    const { id } = body;
    const data = await tracksModel.findById(id);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, error);
  }
}

/**
 * create a track
 * @param req
 * @param res
 */
const createTrack = async (req, res) => {
  try {
    const body = matchedData(req);

    const data = await tracksModel.create(body);
    res.send({ data });

  } catch (error) {
    handleHttpError(res, error);
  }
}

/**
 * update a track
 * @param req
 * @param res
 */
const updateTrack = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await tracksModel.findOneAndUpdate(id, body, { update: true });
    res.send({ data });
  } catch (error) {
    handleHttpError(res, error);
  }
}

/**
 * delete a track
 * @param req
 * @param res
 */
const deleteTrack = async (req, res) => {
  try {
    const body = matchedData(req);
    const { id } = body;
    const data = await tracksModel.delete({ _id: id })
    res.send({ data });
  } catch (error) {
    handleHttpError(res, error);
  }
}

module.exports = {
  getTracks,
  getTrack,
  createTrack,
  updateTrack,
  deleteTrack,
};