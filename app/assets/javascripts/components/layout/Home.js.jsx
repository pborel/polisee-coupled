var Home = React.createClass({
  componentWillReceiveProps: function() {
  },

  render: function() {
    return (
      <div id="home-view">
        <ArticleContainer url="/bills" favoritesUrl="/favorites" />
        <RepresentativeContainer url="/legislators" reps={this.props.reps} />
      </div>
    );
  }
});
