const express = require('express');
const router = express.Router();
const placeholderController = require('../placeholder/placeholder.controller');
const PATH = "/placeholder/";

router.post(PATH + "placeholder/", placeholderController.test);

module.exports = router;