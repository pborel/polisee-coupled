var Menu = React.createClass({
  componentDidMount: function() {
    this.props.parentComponent.checkSignedIn()
  },

  handleZipTransaction: function(zipCode) {
    this.props.parentComponent.setZipCode(zipCode)
  },

  render: function() {
    if (this.props.signedIn) {
      var signingLink =
        <span id={this.props.signedIn}>
            <a className="valign-wrapper debugger1" href={'/signout'}><i className="debugger1 material-icons valign">input</i><span className="sign-in-out-margin-left">Sign Out</span></a>
        </span>;
    } else {
      var signingLink =
        <span id={this.props.signedIn}>
            <a className="debugger1 valign-wrapper" href={'/auth/twitter'}><i className="material-icons valign debugger1">perm_identity</i><span className="sign-in-out-margin-left">Sign In</span></a>
        </span>
    }
    return (
      <nav className="cyan darken-1">
        <div className="inner-menu-container">
            <div className="debugger">
             <div className="row margin-padding debugger ">
               <div className="col margin-padding debugger">
                 <a href="/"><img className="brand-logo center logo" src="https://slack-files.com/files-tmb/T09P4E2TZ-F0A2BFHMZ-ddfafbc0f1/drawing__3__1024.png"></img></a>
               </div>
             </div>
           </div>
            <ul className="debugger1 left hide-on-med-and-down">
              <li className="debugger1">{signingLink}</li>
            </ul>

            <div className="right hide-on-med-and-down">
                <ZipContainer parentComponent={this.props.parentComponent} handleSubmit={this.handleZipTransaction}/>
            </div>

        </div>
      </nav>
    );
  }
});
