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
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo center">Polisee</a>
            <ul className="left hide-on-med-and-down">
              <li>{signingLink}</li>
            </ul> 
            <ul className="right hide-on-med-and-down">
              <form>
                <div className="input-field">
                  <input id="search" type="search" placeholder = "zipjawn"/>
                  <label for="search"><i className="material-icons">search</i></label>
                </div>
              </form>
            </ul>
        </div>
      </nav>
    );
  }
});
// auth/twitter/callback



// <span id="menu-link"><span></span></span>
// <div className="nav-wrapper">
//   <a href="#" className="brand-logo">Polisee</a>
//   <form>
       
//            <input id="search" type="search" required />
//            <label for="search"><i className="material-icons">search</i></label>
//            <i className="material-icons">close</i>
//          </div>
//   </form>
//   <ul id="nav" className="right hide-on-med-and-down">
//     <li>Home</li>
//     <li>About</li>
//     {signingLink}
//   </ul>
// </div>