var RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;

var ArticleContainer = React.createClass({
  render: function() {
    return (
      <div className="debugger articles-container">
        <Box url="http://localhost:3000/bills" />
      </div>
    )
  }
});

