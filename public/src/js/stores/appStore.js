var EventEmitter = require('events').EventEmitter;
var merge = require('merge');
var axios = require('axios');
var AppDispatcher = require('../dispatchers/appDispatcher.js');
var browserHistory = require("react-router/lib/browserHistory");

var _hasResults = false;
var result = [];
var AppStore = merge(EventEmitter.prototype, {
  checkResults : function(){
    return _hasResults;
  },
  getNearbyRestaurants : function(){
    return result;
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
        result  = response.data.nearby_restaurants;
        console.log(result);
        _hasResults = true;
        AppStore.emit("GETDATA");

      }).catch(function(err){
        console.log("axios error : "+err.message)
      });
    }
}
