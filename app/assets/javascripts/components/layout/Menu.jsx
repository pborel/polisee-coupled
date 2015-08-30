// var React = require('react');
// var Router = require('react-router');
// var Link = Router.Link;

var Menu = React.createClass({
  handleSignOutLink: function() {
    // sessionStorage.setItem('jwt','');
    location = '/';
  },
  render: function() {
    // if (this.props.signedIn) {
      var signingLink = <li><span>Sign Out</span></li>;
    // } else {
      // var signingLink = <li><a href="#">Sign In</a></li>;
    // }

    return (
      <nav>
        <span id="menu-link"><span></span></span>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Polisee</a>
          <ul id="nav" className="right hide-on-med-and-down">
            <li>Home</li>
            <li>About</li>
          </ul>
        </div>
      </nav>
    );
  }
});
