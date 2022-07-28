const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');
const PATH = "/user/";

router.post(PATH + "create/", UserController.create);

module.exports = router;