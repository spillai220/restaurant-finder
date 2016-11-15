var React = require('react');

//var UserStore = require('../stores/userStore.js');
var AppStore = require('../stores/appStore.js');
var AppDispatcher = require('../dispatchers/appDispatcher.js');
var Restaurant = require('./restaurant.jsx');
var $ = require('jquery');

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
      <div className="img_container">
      <img className="header_img" src="../../uploads/food-header.png"/>
      <div className="overlay">
      <h5 className="white-text"> Find the best restaurants in area</h5>
      <div className="form">
      <input className="main_search" type="text" name="search" ref="search" placeholder="  Enter a location to search"/>
      <a className="waves-effect btn" onClick={this.handleSearch}>Search</a>
      </div>
      </div>
    </div>
      <div className="container">


        {(AppStore.checkResults() ==  true && this.state.loading ==true) ? <h3>loading...</h3> : ''}
        {(AppStore.checkResults() && !this.state.loading) ? results : ''}
        </div>
      </div>
    )
  }
});
module.exports = Dashboard
