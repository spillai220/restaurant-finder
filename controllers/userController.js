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
    res.status(200).send("Login Successfull");
    console.log("server side : login Successfull")
  })
};
module.exports = {
  index : indexLogin
}
