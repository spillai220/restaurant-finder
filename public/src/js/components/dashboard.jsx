var React = require('react');

//var UserStore = require('../stores/userStore.js');
var AppStore = require('../stores/appStore.js');
var AppDispatcher = require('../dispatchers/appDispatcher.js');
var Restaurant = require('./restaurant.jsx');

var Dashboard = React.createClass({
  getInitialState : function(){
    return{
      restaurantData : AppStore.getNearbyRestaurants(),
      loading : false
    };
  },
  componentDidMount : function(){
    var self = this;
    AppStore.on('GETDATA', function(){
      this.setState({
        restaurantData : AppStore.getNearbyRestaurants(),
        loading : true
      }, function(){
        setTimeout(function(){
          self.setState({loading : false});
        }.bind(this), 500);
      })
    }.bind(this))
  },
  handleSearch : function(){
    console.log("user searched for: "+this.refs.search.value);
    AppDispatcher.dispatch({
      action: "SEARCH",
      data: {search : this.refs.search.value}
    });
    console.log("dispatched search");
  },
  render: function(){

    console.log(AppStore.checkResults());
    var results = (
        <div>
          <h3>Nearby Restaurants</h3>
          {
            this.state.restaurantData.map(function(result, i){

              return (
                <Restaurant restaurant={result.restaurant} key={i}/>
              )
            })
          }
        </div>
      )

    return(
      <div>
        <h1> Hello World - Dashboard</h1>
        <input type="text" name="search" ref="search" placeholder="Enter a location to search"/>
        <button type="button" onClick={this.handleSearch}>Search</button>
        {(AppStore.checkResults() ==  true && this.state.loading ==true) ? <h3>loading...</h3> : ''}
        {(AppStore.checkResults() && !this.state.loading) ? results : ''}
      </div>
    )
  }
});
module.exports = Dashboard
