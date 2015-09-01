var Home = React.createClass({
  getInitialState: function() {
    return { signedIn: false,
             representatives: [] }
  },

  // handleSigningLink: function() {
    // signedIn = !signedIn;
  // },

  loadRepresentativesFromServer: function() {
    $.ajax({
      url: '/legislators',
      dataType: 'json',
      cache: false,
      success: function(data) {
        debugger
        this.setState({representatives: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.loadRepresentativesFromServer();
  },

  setZipCode: function(zipCode) {
    $.ajax({
      url: "/legislators",
      dataType: 'json',
      cache: false,
      data: {zip: zipCode},
      success: function(reps) {
        console.log("Zip: " + zipCode)
        this.setState({representatives: reps});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log("Zip: ERROR")
        console.error('/check', status, err.toString());
        console.error(this.state.zip);
      }.bind(this)
    });
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
      <div id="home-view">
        <Menu signedIn={this.state.signedIn} parentComponent={this} />
        <ArticleContainer url="/bills" favoritesUrl="/favorites" />
        <RepresentativeContainer url="/legislators" reps={this.state.representatives}/>
      </div>
    );
  }
});
