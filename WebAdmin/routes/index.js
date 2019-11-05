var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});
router.post('/', function(req, res, next) {
  res.redirect('index');
});
router.get('/index', function(req, res, next) {
  res.render('index');
});
router.get('/accounts', function(req, res, next) {
  res.render('tables');
});

module.exports = router;
