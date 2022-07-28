const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/login');
const PATH = "/login";

router.post(PATH + "/", LoginController.login);

module.exports = router;