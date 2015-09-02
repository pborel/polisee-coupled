// var RouteHandler = ReactRouter.RouteHandler,
//     Link = ReactRouter.Link;

var RepresentativeContainer = React.createClass({
  render: function() {
    return (
      <div className="debugger rep-container container-spacer">
        <RepresentativeBox url={this.props.url} reps={this.props.reps} />
      </div>
    )
  }
});
