const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../utils/handlePassword");
const { usersModel } = require("../models");
const { tokenSign } = require("../utils/handleJwt");
const { handleHttpError } = require("../utils/handleError");

const registerCtrl = async (req, res) => {
  try {
    req = matchedData(req);
    const passwordHash = await encrypt(req.password);
    const body = { ...req, password: passwordHash };
    const dataUser = await usersModel.create(body);
    dataUser.set('password', undefined, { strict: false });

    const data = {
      token: await tokenSign(dataUser),
      user: dataUser
    }

    res.send({ data: data });
  } catch (e) {
    handleHttpError(res, e)
  }
}

const loginCtrl = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await usersModel.findOne({ email: req.email }).select('password name role email');
    if (!user) {
      handleHttpError(res, "USER_NOT_EXITS", 404);
      return;
    }
    const hashPassword = user.password;
    const checkPassword = await compare(req.password, hashPassword);
    if (!checkPassword) {
      handleHttpError(res, "PASSWORD_NOT_VALID", 401);
      return;
    }

    user.set('password', undefined);
    const data = {
      token: await tokenSign(user),
      user: user,
    }

    res.send({ data: data });
  } catch (e) {
    console.log(e);
    handleHttpError(res, e);
  }
}

module.exports = {
  registerCtrl,
  loginCtrl
}