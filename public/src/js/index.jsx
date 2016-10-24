//require react here:
var React = require("react");
var ReactDOM = require("react-dom");
//require components here :
var Login = require("./components/login.jsx");
var Dashboard = require("./components/dashboard.jsx");

// require router:
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

//require browserhistory - routing
var BrowserHistory = require("react-router/lib/browserHistory");


require('../css/style.css');

var App = React.createClass({

  render: function() {
    return (
      <div className="content">
        <h1>Werkin</h1>
        <Login/>
      </div>
    )
  }
});

ReactDOM.render(
  <Router history={BrowserHistory}>
    <Route path='/' component={App}/>
    <Route path='/dashboard' component={Dashboard}/>
  </Router>,
  document.getElementById('app')
);
