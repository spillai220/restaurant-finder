var React = require('react');

var Restaurant = React.createClass({
  render : function(){
    return(
      <div>
        <h1>{this.props.restaurant.name}</h1>
        <p>{this.props.restaurant.location.address}</p>
      </div>
    )
  }
});
module.exports = Restaurant;
