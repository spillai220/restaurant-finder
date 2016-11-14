var express = require('express');
var router = express.Router();
var path = require('path');

var axios = require('axios');
var userController = require('../controllers/userController.js');
var appController = require('../controllers/appController.js');

router.route('/login')
      .post(userController.index);

router.route('/users')
      .post(userController.create);

router.route('/search')
      .post(appController.search);
router.route('*')
      .get(function(req,res){
        res.sendFile(path.resolve("./public/index.html"));
      });
module.exports = router;
