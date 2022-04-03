const express = require('express');
const { validatorLogin, validatorRegister } = require("../validators/auth");
const { registerCtrl, loginCtrl } = require("../controllers/auth");
const router = express.Router();

/**
 * Create login
 */
router.post('/login', validatorLogin, loginCtrl);

/**
 * Create register
 */
router.post('/register', validatorRegister, registerCtrl);

module.exports = router;