const express = require('express');
const router = express.Router();
const ActivityController = require('../controllers/activity');
const PATH = "/activities/";

router.get(PATH + ":id", ActivityController.get);
router.get(PATH, ActivityController.getAll);
router.get(PATH + ":activityId/:gymId", ActivityController.getDetail);

module.exports = router;