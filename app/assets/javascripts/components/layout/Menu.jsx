var Menu = React.createClass({
  handleZipTransaction: function(zipCode) {
    this.props.parentComponent.setZipCode(zipCode)
  },

  render: function() {
    if (this.props.signedIn) {
      var signingLink = <li><span id={this.props.signedIn}><a href={'/signout'}>Sign Out</a></span></li>;
    } else {
      console.log(this.props.parentComponent);
      var signingLink = <li><span id={this.props.signedIn}><a href={'/auth/twitter'}>Sign In</a></span></li>
    }
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo center">Polisee</a>
            <ul className="left hide-on-med-and-down">
              <li>{signingLink}</li>
            </ul>
            <ul className="right hide-on-med-and-down">

            <ZipContainer parentComponent={this.props.parentComponent} handleSubmit={this.handleZipTransaction}/>

            </ul>
        </div>
      </nav>
    );
  }
});

       