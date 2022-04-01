const { tracksModel } = require('../models');

/**
 * get track list
 * @param req
 * @param res
 */
const getTracks = async (req, res) => {
    const data = await tracksModel.find({});
    res.send({ data });
}

/**
 * get track by id
 * @param req
 * @param res
 */
const getTrack = (req, res) => {
    const data = ["hola", "mundo", req.id];

    res.send({ data });
}

/**
 * create a track
 * @param req
 * @param res
 */
const createTrack = async (req, res) => {
    const { body } = req;
    const data = await tracksModel.create(body);
    res.send({ data })
}

/**
 * update a track
 * @param req
 * @param res
 */
const updateTrack = (req, res) => {
}

/**
 * delete a track
 * @param req
 * @param res
 */
const deleteTrack = (req, res) => {
}

module.exports = {
    getTracks,
    getTrack,
    createTrack,
    updateTrack,
    deleteTrack,
};