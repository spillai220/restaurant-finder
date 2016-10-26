var EventEmitter = require('events').EventEmitter;
var merge = require('merge');
var axios = require('axios');
var AppDispatcher = require('../dispatchers/appDispatcher.js');
var BrowserHistory = require("react-router/lib/browserHistory");

var _hasResults = false;
var AppStore = merge(EventEmitter.prototype, {
  checkResults : function(){
    return _hasResults;
  }
})

module.exports = AppStore;

AppDispatcher.register(handleSearchAction);

function handleSearchAction(payload) {
  console.log(payload)
    if(payload.action === "SEARCH"){
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
