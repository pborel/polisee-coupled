// var mui = require('material-ui')

var Article = React.createClass({
  render: function() {
    return (
      <div className="debugger article">
        {this.props.children}
      </div>
    )
  }
});
