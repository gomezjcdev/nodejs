const { handleHttpError } = require("../utils/handleError");
const { verifyToken } = require("../utils/handleJwt");
const { usersModel } = require("../models");
const getProperties = require("../utils/handleEngineProperties");
const propertiesKey = getProperties();

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      handleHttpError(res, "NO_TOKEN", 401);
      return;
    }

    const token = req.headers.authorization.split(' ').pop();
    const dataPayload = await verifyToken(token);

    if (!dataPayload) {
      handleHttpError(res, "MISSING_PAYLOAD", 401);
      return;
    }

    const query = {
      [propertiesKey.id]: dataPayload[propertiesKey.id]
    }

    req.user = await usersModel.findOne(query);

    next();
  } catch (e) {
    handleHttpError(res, e);
  }
}

module.exports = authMiddleware;