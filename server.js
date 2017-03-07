// Require dependencies
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express(); 
var port = 8080;

// use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

// route our app
var router = require('./app/routes');
app.use('/', router);

// Set static files (css, images, etc)
app.use(express.static(__dirname + '/public'));

// Start the server
app.listen(port, function() {
  console.log('app started');
});

