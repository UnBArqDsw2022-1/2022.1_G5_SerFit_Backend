const express = require('express');
const router = express.Router();
const ServiceHiringController = require('../controllers/service-hiring');
const PATH = "/service-hiring/";

router.post(PATH, ServiceHiringController.create);
router.delete(PATH, ServiceHiringController.delete);

module.exports = router;