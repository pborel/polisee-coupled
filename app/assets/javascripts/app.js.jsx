var RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;
    // React = require('react'),
    // mui = require('material-ui'),
    // RaisedButton = mui.RaisedButton;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Menu />
        <ArticleContainer url="/bills" />
        <RepresentativeContainer url="/legislators" />
      </div>
    );
  }
});
        // <RaisedButton label="hello" />
