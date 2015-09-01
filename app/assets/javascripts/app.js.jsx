var RouteHandler = ReactRouter.RouteHandler,
  Link = ReactRouter.Link;

var App = React.createClass({
  getInitialState: function() {
    return { signedIn: false }
  },

  checkSignedIn: function() {
    $.ajax({
      url: '/check',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({signedIn: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('/check', status, err.toString());
        console.error(this.state.data);
      }.bind(this)
    });
  },

  render: function() {
    return (
      <div>
        <Menu signedIn={this.state.signedIn} parentComponent={this} />
        <ArticleContainer url="/bills" favoritesUrl="/favorites" />
        <RepresentativeContainer url="/legislators" />
        <FooterContainer />
      </div>
    );
  }
});
