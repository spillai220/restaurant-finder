var React = require('react');
var Link = require('react-router').Link;
var AppDispatcher = require('../dispatchers/appDispatcher.js');
var UserStore = require('../stores/userStore.js');

var Register = React.createClass({

  handleRegister : function(event){
    var self = this;
    event.preventDefault();
    console.log("handling register: "+this.refs.name.value);
    AppDispatcher.dispatch({
      action : "REGISTER",
      data : {
               name: self.refs.name.value,
               username: self.refs.username.value,
               password: self.refs.password.value
             }
    });

  },

  render : function(){
    return(
      <div>
        <form>
          name : <input type="text" name="name" ref="name" placeholder="Enter name"/>
          username:<input type="text" name="username" ref="username" placeholder="Enter Username"/>
          password:<input type="password" name="password" ref="password" placeholder="Enter Password"/>
          <button type="button" onClick={this.handleRegister}>Register</button>
        </form>
        <button type="button"><Link to="/">Home</Link></button>
      </div>
    )
  }
});
module.exports = Register;
