var Home = React.createClass({
  render: function() {
    return (
      <div id="home-view">
        <ArticleContainer url="/bills" favoritesUrl="/favorites" />
        <RepresentativeContainer url="/legislators" />
      </div>
    );
  }
});
