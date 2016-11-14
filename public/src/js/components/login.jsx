var React = require('react');
var AppDispatcher = require('../dispatchers/appDispatcher.js')
var Link = require('react-router').Link


var Login = React.createClass({

  handleLogin : function(e){
    var self = this;
    e.preventDefault;
    AppDispatcher.dispatch({
      action : "LOGIN",
      data : {
        username: self.refs.username.value,
        password: self.refs.password.value
      }
    });
      console.log("login dispatched")

  },

  render : function(){
    return (
      <div>
        <h1> Please Login </h1>
        <form>
          Username :<input type="text" name="username" ref="username"/>
          Password :<input type="password" name="password" ref="password"/>
          <button type="button" onClick={this.handleLogin}>Login</button>
        </form>
        <button type="button"><Link to="/register">Register</Link></button>
      </div>
    )

  }
});
module.exports = Login;
