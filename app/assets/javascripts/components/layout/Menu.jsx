var Menu = React.createClass({
  componentDidMount: function() {
    console.log("sheeet")
    this.props.parentComponent.checkSignedIn()
  },

  render: function() {
    if (this.props.signedIn) {
      var signingLink = <li><span id={this.props.signedIn}><a href={'/logout'}>Sign Out</a></span></li>;
    } else {
      console.log(this.props.parentComponent);
      var signingLink = <li><span id={this.props.signedIn}><a href={'/auth/twitter'}>Sign In</a></span></li>
    }
    return (
      <nav>
        <span id="menu-link"><span></span></span>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Polisee</a>
          <ul id="nav" className="right hide-on-med-and-down">
            <li>About</li>
            {signingLink}
          </ul>
        </div>
      </nav>
    );
  }
});
