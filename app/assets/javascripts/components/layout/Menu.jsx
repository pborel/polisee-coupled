var Menu = React.createClass({
  componentDidMount: function() {
    this.props.parentComponent.checkSignedIn()
  },

  handleZipTransaction: function(zipCode) {
    this.props.parentComponent.setZipCode(zipCode)
  },

  render: function() {
    if (this.props.signedIn) {
      var signingLink = <li><span id={this.props.signedIn}><a href={'/signout'}><i className="material-icons">input</i>Sign Out</a></span></li>;
    } else {
      var signingLink = <li><span id={this.props.signedIn}><a href={'/auth/twitter'}><i className="material-icons">perm_identity</i>Sign In</a></span></li>
    }
    return (
      <nav className="cyan darken-1">
        <div className="inner-menu-container">
            <div className="debugger">
             <div className="row margin-padding debugger ">
               <div className="col margin-padding debugger">
                 <a href="/"><img className="brand-logo center logo debugger" src="https://slack-files.com/files-tmb/T09P4E2TZ-F0A2BFHMZ-ddfafbc0f1/drawing__3__1024.png"></img></a>
               </div>
             </div>
           </div>
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


