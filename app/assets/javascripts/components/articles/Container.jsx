// var RouteHandler = ReactRouter.RouteHandler,
    // Link = ReactRouter.Link;

var ArticleContainer = React.createClass({
  render: function() {
    return (
      <div className="debugger articles-container">
        <ArticleBox url={this.props.url} favoritesUrl={this.props.favoritesUrl} />
      </div>
    )
  }
});

