var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mid');
});
router.get('/idaodan', function(req, res, next) {
  res.render('idaodan');
});
router.get('/pdaodan', function(req, res, next) {
  res.render('pdaodan');
});
router.get('/vdaodan', function(req, res, next) {
  res.render('vdaodan');
});
module.exports = router;
