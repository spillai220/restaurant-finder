var React = require('react');

var UserStore = require('../stores/userStore.js');
var AppDispatcher = require('../dispatchers/appDispatcher.js');

var Dashboard = React.createClass({

  handleSearch : function(){
    console.log("user searched for: "+this.refs.search.value);
    AppDispatcher.dispatch({
      action: "SEARCH",
      data: {search : this.refs.search.value}
    });
    console.log("dispatched search");
  },

  render: function(){
    return(
      <div>
        <h1> Hello World - Dashboard</h1>
        <input type="text" name="search" ref="search" placeholder="Enter a location to search"/>
        <button type="button" onClick={this.handleSearch}>Search</button>
      </div>
    )
  }
});
module.exports = Dashboard
