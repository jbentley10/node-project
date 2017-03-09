// Require dependencies
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express(); 
var port = 5000;

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

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

