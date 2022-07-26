var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (_req, res) {
  res.send('Initial page');
  res.render('index', { title: 'SerFit-api' });
});

module.exports = router;
