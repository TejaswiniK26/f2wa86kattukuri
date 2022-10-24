var express = require('express');
var router = express.Router();

/* mydata page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Tejaswini Kattukuri' });
});

module.exports = router;
