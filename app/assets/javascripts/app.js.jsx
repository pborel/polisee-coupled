var RouteHandler = ReactRouter.RouteHandler,
  Link = ReactRouter.Link;

var App = React.createClass({
  getInitialState: function() {
    return { signedIn: false,
             zipCode: null }
  },

  // handleSigningLink: function() {
    // signedIn = !signedIn;
  // },

  setZipCode: function() {
    $.ajax({
      url: // url here,
      dataType: 'json',
      cache: false,
      success: function(zip) {
        console.log("Zip: " + zip)
        this.setState({zipCode: zip});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log("Zip: ERROR")
        console.error('/check', status, err.toString());
        console.error(this.state.zip);
      }.bind(this)
    });
  

  }

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
        <RouteHandler />
        <FooterContainer />
      </div>
    );
  }
});
        // <ArticleContainer url="/bills" favoritesUrl="/favorites" />
        // <RepresentativeContainer url="/legislators" />
