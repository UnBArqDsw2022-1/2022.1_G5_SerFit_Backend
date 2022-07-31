const express = require('express');
const router = express.Router();
const LoginController = require('./login.controller');
const PATH = "/login";

router.post(PATH + "/", LoginController.login);

module.exports = router;