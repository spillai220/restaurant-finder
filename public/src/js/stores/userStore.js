var EventEmitter = require('events').EventEmitter;
var merge = require('merge');
var axios = require('axios');
var Dispatcher = require('../dispatchers/appDispatcher.js');
//may need to be moved to login:
var BrowserHistory = require("react-router/lib/browserHistory");
var _user= {};
var loggedIn = false;

var UserStore = merge(EventEmitter.prototype, {
  getUser : function(){
    return _user;
  },
  getLoggedIn : function(){
    return loggedIn;
  }


})

module.exports = UserStore;

Dispatcher.register(handleAction);

function handleAction(payload) {
    if(payload.action == "LOGIN"){
      axios({
        method:'post',
        url: '/login',
      }).then(function(response){
        console.log("logging in (axios post)");
        loggedIn = true;
        UserStore.emit('LOGSUCCESS');
        if(response.status(200)){
          BrowserHistory.push('/dashboard')
        }

      }).catch(function(err){
        console.log("axios error : "+err.message)
      });

    }
    //UserStore.emit("tang");
}
