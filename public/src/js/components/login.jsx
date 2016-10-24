var React = require('react');
var AppDispatcher = require('../dispatchers/appDispatcher.js')


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
    })

  },

  render : function(){
    return (
      <form>
        <input type="text" name="username" ref="username"/>
        <input type="password" name="password" ref="password"/>
        <button type="button" onClick="handleLogin">Login</button>
      </form>
    )

  }
});
module.exports = Login;
