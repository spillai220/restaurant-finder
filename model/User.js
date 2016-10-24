var mongoose = require('mongoose');

//create new scheme:
var UserSchema = mongoose.Schema({
  name     : String,
  username : String,
  password : String
});
// tell mongoose to create a real model from our schema and export it
module.exports = mongoose.model('RFUser', UserSchema);
