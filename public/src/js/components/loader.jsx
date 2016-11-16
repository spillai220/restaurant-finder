var React = require('react');

var Loader = React.createClass({
  render : function(){
    return (
      <div className="container">
      <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-red-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div><div className="gap-patch">
            <div className="circle"></div>
          </div><div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
     </div>
    )
  }
});
module.exports = Loader;
