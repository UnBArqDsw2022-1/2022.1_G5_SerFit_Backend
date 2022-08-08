const express = require('express');
const router = express.Router();
const ExerciseController = require('../controllers/exercise');
const PATH = "/exercises/";

router.get(PATH + ':id', ExerciseController.get);
router.get(PATH, ExerciseController.getAll);

module.exports = router;