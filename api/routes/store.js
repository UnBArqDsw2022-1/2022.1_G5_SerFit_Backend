const express = require('express');
const router = express.Router();
const StoreController = require('../controllers/store');
const PATH = "/stores/";

router.get(PATH + ":id", StoreController.get);
router.get(PATH, StoreController.getAll);

module.exports = router;