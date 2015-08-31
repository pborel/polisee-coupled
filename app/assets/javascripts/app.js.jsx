var RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Menu />
        <ArticleContainer url="/bills" />
        <RepresentativeContainer url="/legislators" />
        <FooterContainer />
      </div>
    );
  }
});
