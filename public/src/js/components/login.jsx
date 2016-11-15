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
        <div className="container">
        <h3>Please Login</h3>
        <div className="z-depth-3 grey lighten-4 row">
        <div className="container">
            <div className="col s12">
                Username :<input type="text" name="username" ref="username"/>
                Password :<input type="password" name="password" ref="password"/>

                <button type="button" onClick={this.handleLogin}>Login</button>
              <button type="button"><Link to="/register">Register</Link></button>
            </div>
          </div>
        </div>
      </div>
    )

  }
});
module.exports = Login;
