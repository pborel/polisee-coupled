var RouteHandler = ReactRouter.RouteHandler,
  Link = ReactRouter.Link;

var App = React.createClass({


  render: function() {
    return (
      <div>
        <RouteHandler />
        <FooterContainer />
      </div>
    );
  }
});
        // <ArticleContainer url="/bills" favoritesUrl="/favorites" />
        // <RepresentativeContainer url="/legislators" />
