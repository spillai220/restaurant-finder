var User = require('../model/User.js')


function indexLogin(req, res){
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({username : username}, function(err, user){
    if(err){
      res.status(500).send({err : err.message});
      console.log("server side : err 500")
    }
    if(!user){
      res.status(404).send({err : "User not found"});
      console.log("server side : err 404")
    }
    res.status(200).send("Login Successful");
    console.log("server side : login Successful")
  })
};
function createUser(req, res){
  console.log(req);
  User.create({
    name : req.body.name,
    username: req.body.username,
    password: req.body.password
  }, function(err, savedUser){
    if(err || req.body.password == ""){
      res.status(500).send({err : err.message});
    }
    res.status(200).send("Success")
  })
}
module.exports = {
  index : indexLogin,
  create: createUser
}
