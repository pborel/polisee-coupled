// var React = require('react');
// var RouteHandler = require('react-router').RouteHandler;

var Article = React.createClass({
  render: function() {
    return (
      <div className="debugger article">
        {this.props.children}
      </div>
    )
  }
});
