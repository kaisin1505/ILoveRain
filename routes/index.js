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
router.get('/cart/', (req, res, next) => {
  res.render('pages/cart');
});
router.get('/account/', (req, res, next) => {
  res.render('pages/account');
});
router.get('/history/', (req, res, next) => {
  res.render('pages/history');
});
router.get('/login/', (req, res, next) => {
  res.render('pages/login');
});
router.get('/register/', (req, res, next) => {
  res.render('pages/register');
});
router.get('/forgotAccount/', (req, res, next) => {
  res.render('pages/forgotAccount');
});

module.exports = router;
