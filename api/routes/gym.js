const express = require('express');
const router = express.Router();
const GymController = require('../controllers/gym');
const PATH = "/gyms/";

router.get(PATH + ":id", GymController.get);
router.get(PATH, GymController.getAll);

module.exports = router;