// Require express
var express = require('express');
var path    = require('path');

// create our router object
var router = express.Router();

// Export our router
module.exports = router;

// route our home page, takes in request and response
router.get('/', function(req, res) {
  res.render('pages/home');
});

// Route for our about page
router.get('/about', function(req, res) {
  res.render('pages/about');
});

router.get('/contact', function(req, res) {
  res.render('pages/contact');
});

router.post('/contact', function(req, res) {

});
