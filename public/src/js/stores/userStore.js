var EventEmitter = require('events').EventEmitter;
var merge = require('merge');
var axios = require('axios');
var AppDispatcher = require('../dispatchers/appDispatcher.js');
var browserHistory = require("react-router/lib/browserHistory");

var  _user = "";
var UserStore = merge(EventEmitter.prototype, {
  getUser : function(){
    return _user;
  }
});
module.exports = UserStore;

AppDispatcher.register(handleAction);

function handleAction(payload) {
  console.log(payload);
  if(payload.action === "REGISTER"){
    console.log("payload action register recieved");
    axios({
      method: 'POST',
      url: '/users',
      data: payload.data
    }).then(function(response){
      console.log(response);
      browserHistory.push("/");
    }).catch(function(err){
      console.log("axios error :" +err.message);
    });
  }
  if(payload.action  === "LOGIN"){
    console.log("payload action login receieved");
    axios({
      method: 'POST',
      url: '/login',
      data: payload.data
    }).then(function(response){
      console.log(response);
      browserHistory.push("/dashboard");

    }).catch(function(err){
      console.log("axios error :" +err.message);
    })
  }
}
