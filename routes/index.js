var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
router.get('/index', function(req, res, next) {
  res.render('index');
});
module.exports = router;
