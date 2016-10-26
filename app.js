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

//var upload = multer({dest : '/uploads'})
var storage = multer.diskStorage({
  destination : function(req, file, cb){
    cb(null, './public/uploads')
  },
  filename : function(req, file, cb){
    cb(null, file.fieldname + '-' + Date.now()+'.'+ mime.extension(file.mimetype))
  }
})
var upload = multer({storage : storage})
app.post('/profile', upload.any(), function(req, res, next){
  //req.file is the avatar file
  //req.body will hold the textfields
  console.log(req.file +" uploaded!");
  res.redirect('/dashboard');
})

// app.use(cookieParser());
// app.use(session({
//   secret: 'secretkey',
//   resave: false,
//   saveUnitialized : true
// }));



app.listen(3000, function(){
  console.log("listening on port 3000")
})
