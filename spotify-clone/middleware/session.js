const { handleHttpError } = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJwt");
const { usersModel } = require("../models");
const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      handleHttpError(res, "NO_TOKEN", 401);
      return;
    }

    const token = req.headers.authorization.split(' ').pop();
    const dataPayload = await verifyToken(token);

    if (!dataPayload.id) {
      handleHttpError(res, "ERROR_ID_TOKEN", 401);
      return;
    }

    req.user = await usersModel.findById(dataPayload.id);

    next();

  } catch (e) {
    handleHttpError(res, e);
  }
}

module.exports = authMiddleware;