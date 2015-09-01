var RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;

var RepresentativeContainer = React.createClass({
  render: function() {
    return (
      <div className="debugger rep-container">
        <RepresentativeBox url={this.props.url} />
      </div>
    )
  }
});
