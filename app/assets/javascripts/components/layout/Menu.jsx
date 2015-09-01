var Menu = React.createClass({
  componentDidMount: function() {
    this.props.parentComponent.checkSignedIn()
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
          <a href="#!" className="brand-logo center">Polisee</a>
            <ul className="left hide-on-med-and-down">
              <li>{signingLink}</li>
            </ul>
            <ul className="right hide-on-med-and-down">
              <form>
                <div className="input-field">
                  <input id="search" type="search" placeholder = "zipcode"/>
                  <label htmlFor="search"><i className="material-icons">search</i></label>
                </div>
              </form>
            </ul>
        </div>
      </nav>
    );
  }
});

