const { storageModel } = require('../models');
const PUBLIC_URL = process.env.PUBLIC_URL;
/**
 * get storage list
 * @param req
 * @param res
 */
const getStorages = async (req, res) => {
    const data = await storageModel.find({});
    res.send({ data });
}

/**
 * get storage by id
 * @param req
 * @param res
 */
const getStorage = (req, res) => {
    const data = ["hola", "mundo", req.id];

    res.send({ data });
}

/**
 * create a storage
 * @param req
 * @param res
 */
const createStorage = async (req, res) => {
    const { file } = req;
    const data = await storageModel.create({
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    });
    res.send({ data })
}

/**
 * update a storage
 * @param req
 * @param res
 */
const updateStorage = (req, res) => {
}

/**
 * delete a storage
 * @param req
 * @param res
 */
const deleteStorage = (req, res) => {
}

module.exports = {
    getStorages,
    getStorage,
    createStorage,
    updateStorage,
    deleteStorage,
};