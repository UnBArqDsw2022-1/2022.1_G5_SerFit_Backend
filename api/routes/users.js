const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');
const PATH = "/user/";

router.get(`${PATH}`, UserController.all);
router.get(`${PATH}find/`, UserController.find.bind(UserController));
router.post(`${PATH}create/`, UserController.create);

module.exports = router;