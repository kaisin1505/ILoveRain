var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index');
});

router.get('/products', (req, res, next) => {
  res.render('pages/products');
});
router.get('/product/:id', (req, res, next) => {
  res.render('pages/single');
});
router.get('/checkout/', (req, res, next) => {
  res.render('pages/checkout');
});
module.exports = router;
