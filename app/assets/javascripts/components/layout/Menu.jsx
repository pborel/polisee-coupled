var Menu = React.createClass({
  handleSignOutLink: function() {
    location = '/';
  },

  render: function() {
    if (this.props.signedIn) {
      var signingLink = <li><span onClick={this.handleSignOutLink}>Sign Out</span></li>;
    } else {
      var signingLink = <li><a href={this.props.origin + '/request_token'}>Sign In</a></li>;
    }

    return (
      <nav>
        <span id="menu-link"><span></span></span>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Polisee</a>
          <ul id="nav" className="right hide-on-med-and-down">
            <li>Home</li>
            <li>About</li>
            {signingLink}
          </ul>
        </div>
      </nav>
    );
  }
});
// auth/twitter/callback
