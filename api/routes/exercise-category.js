const express = require('express');
const router = express.Router();
const ExerciseCategoryController = require('../controllers/exercise-category');
const PATH = "/exercise-categories/"

router.get(PATH + ':id', ExerciseCategoryController.get);
router.get(PATH, ExerciseCategoryController.getAll);

module.exports = router;