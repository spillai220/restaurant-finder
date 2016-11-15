var React = require('react');


var Restaurant = React.createClass({

  render : function(){
    var restaurant = this.props.restaurant;
    var blue = "#00B1E1";

    return(
      <div>
      <div className="col s12 m7">
    <div className="card horizontal">
      <div className="card-image">
        <img src={restaurant.thumb}/>
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <div className="ratings">
          <p style={{backgroundColor: "#"+restaurant.user_rating.rating_color}}>{restaurant.user_rating.rating_text} {restaurant.user_rating.aggregate_rating}

          </p>
          </div>
          <h5 className="restaurant-title">{restaurant.name}</h5>
          <p className="blue-grey-text lighten-1">{restaurant.location.address}</p>
        </div>
        <hr/>
        <div className="card-content">
        <p>Cusines: {restaurant.cuisines}</p>
        <p>Average cost for 2 people: {restaurant.currency} {restaurant.average_cost_for_two}</p>
        </div>
        <div className="card-action">
          <a href={restaurant.menu_url}>Menu</a>
          <a href={restaurant.url}>More Info</a>
        </div>
      </div>
    </div>
  </div>
      </div>
    )

  }
});
module.exports = Restaurant;
