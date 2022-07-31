const express = require('express');
const router = express.Router();
const UserController = require('../user/user.controller');
const PATH = "/user/";

router.post(PATH + "create/", UserController.create);

module.exports = router;