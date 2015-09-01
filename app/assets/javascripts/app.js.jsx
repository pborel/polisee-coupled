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
    console.log("checking signed in");

    $.ajax({
      url: '/check',
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log("Data: " + data)
        this.setState({signedIn: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log("Data: ERROR")
        console.error('/check', status, err.toString());
        console.error(this.state.data);
      }.bind(this)
    });
  },

  test: function() {
    console.log("TEST!!!")
  },

  render: function() {
    return (
      <div>
        <Menu signedIn={this.state.signedIn} parentComponent={this} />
        <ArticleContainer url="/bills" />
        <RepresentativeContainer url="/legislators" />
        <FooterContainer />
      </div>
    );
  }
});
