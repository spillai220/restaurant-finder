//require react here:
var React = require("react");
var ReactDOM = require("react-dom");
//require components here :
var Login = require("./components/login.jsx");
var Dashboard = require("./components/dashboard.jsx");
var Register = require("./components/register.jsx");
var Restaurant = require("./components/restaurant.jsx");

// require router:
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

// requiring all store:
var userStore = require("./stores/userStore.js");
var appStore  = require("./stores/appStore.js");
//require browserhistory - routing
var BrowserHistory = require("react-router/lib/browserHistory");


require('../css/style.css');

//main app page JSX injected to HTML
var App = React.createClass({

  render: function() {
    return (
      <div className="content">
        <Login/>
      </div>
    )
  }
});
//render react DOM
ReactDOM.render(
  //react router to route to specific components
  <Router history={BrowserHistory}>
    <Route path='/' component={App}/>
    <Route path='/dashboard' component={Dashboard}/>
    <Route path='/register' component={Register}/>
  </Router>,
  document.getElementById('app')
);
