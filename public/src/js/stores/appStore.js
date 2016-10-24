var EventEmitter = require('events').EventEmitter;
var merge = require('merge');
var axios = require('axios');
var Dispatcher = require('../dispatchers/appDispatcher.js');

var _count = 0;

var _users = {};

var AppStore = merge(EventEmitter.prototype, {
  getCount: function() {
    console.log("getting count");
    return _count;
  },
})

module.exports = AppStore;

Dispatcher.register(handleAction);

function handleAction(payload) {
    _count++;
    AppStore.emit("tang");
}








