var express = require('express');

var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var path = require('path');
var multer = require('multer');
var mime = require('mime');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurantfinder');

var routes = require('./config/router');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.listen(3000, function(){
  console.log("listening on port 3000")
})
