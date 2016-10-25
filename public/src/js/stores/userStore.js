var EventEmitter = require('events').EventEmitter;
var merge = require('merge');
var axios = require('axios');
//app dispatcher
var AppDispatcher = require('../dispatchers/appDispatcher.js');


//may need to be moved to login:
var BrowserHistory = require("react-router/lib/browserHistory");

//may not need these variables;
 //var _user= {};
 var loggedIn = false;
// var registering = false;

var UserStore = merge(EventEmitter.prototype, {

  getLoggedIn : function(){
    return loggedIn;
  }

})

module.exports = UserStore;
//register function handleaction to app dispatcher
AppDispatcher.register(handleAction);
//check the payload action  to run the appropriate method: LOGIN or REGISTER
function handleAction(payload) {
  console.log(payload);
    if(payload.action == "LOGIN"){
      console.log("payload picked!")
      //use axios to perform a post to server side express api
      axios({
        method:'post',
        url: '/login',
        data: payload.data  //data sent here
      }).then(function(response){
        console.log("logging in (axios post)");
        //UserStore.emit('LOGSUCCESS');
        //maybe use this emit action to do a componentwillmount which sets the
        //local session
        //if(response.status == 200){
          //direct to user dashboard
          BrowserHistory.push('/dashboard');
        // }else{
        //   //redirect to login page
        //   BrowserHistory.push('/');
        // }
      }).catch(function(err){
        console.log("axios error : "+err.message)
      });

    }
    // listen for REGISTER action
    else if(payload.action == "REGISTER"){
      console.log("payload picked!")
      axios({
        method:'post',
        url: '/register',
        data: payload.data
      }).then(function(response){

          console.log("Registered User - axios call")
          BrowserHistory.push('/'); //direct user to login page

      }).catch(function(err){
        console.log("axios error : "+err.message)
      });
    }
    else if(payload.action == "SEARCH"){
      console.log("payload search action received !");
      axios({
        method:'post',
        url: '/search',
        data: payload.data
      }).then(function(response){
        console.log(response);

      }).catch(function(err){
        console.log("axios error : "+err.message)
      });
    }
}
