const express = require('express');
const router = express.Router();
const placeholderController = require('../placeholder/placeholder.controller');
const PATH = "/placeholder/";

router.get(PATH + "test/", placeholderController.test);

module.exports = router;