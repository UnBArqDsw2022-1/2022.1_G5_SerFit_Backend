const express = require('express');
const router = express.Router();
const TrainingController = require('../controllers/training');
const PATH = "/training/";

router.post(PATH, TrainingController.create);
router.delete(PATH, TrainingController.delete);

module.exports = router;