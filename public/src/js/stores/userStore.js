var EventEmitter = require('events').EventEmitter;
var merge = require('merge');
var axios = require('axios');
var AppDispatcher = require('../dispatchers/appDispatcher.js');
//may need to be moved to login:
var BrowserHistory = require("react-router/lib/browserHistory");
var _user= {};
var loggedIn = false;
var registering = false;

var UserStore = merge(EventEmitter.prototype, {
  getUser : function(){
    return _user;
  },
  getLoggedIn : function(){
    return loggedIn;
  },

  getRegisterStatus : function(){
    return registering;
  }

})

module.exports = UserStore;

AppDispatcher.register(handleAction);

function handleAction(payload) {
  console.log(payload);
    if(payload.action == "LOGIN"){
      console.log("payload picked!")
      axios({
        method:'post',
        url: '/login',
        data: payload.data
      }).then(function(response){
        console.log("logging in (axios post)");
        loggedIn = true;
        UserStore.emit('LOGSUCCESS');
        if(response.status == 200){
          BrowserHistory.push('/dashboard');
        }
        // if(response.status(200)){
        //   BrowserHistory.push('/dashboard')
        // }

      }).catch(function(err){
        console.log("axios error : "+err.message)
      });

    }
    else if(payload.action == "REGISTER"){
      console.log("payload picked!")
      axios({
        method:'post',
        url: '/register',
        data: payload.data
      }).then(function(response){
          registering = true;
          console.log("Registered User - axios call")
          BrowserHistory.push('/');

      }).catch(function(err){
        console.log("axios error : "+err.message)
      });
    }
}
