
var Menu = React.createClass({
  componentDidMount: function() {
    this.props.parentComponent.checkSignedIn()
  },

  handleZipTransaction: function(zipCode) {
    this.props.parentComponent.setZipCode(zipCode)
  },

  render: function() {
    if (this.props.signedIn) {
      var signingLink = <li><span id={this.props.signedIn}><a href={'/signout'}><i className="material-icons">input</i></a></span></li>;
    } else {
      console.log(this.props.parentComponent);
      var signingLink = <li><span id={this.props.signedIn}><a href={'/auth/twitter'}><i className="material-icons">perm_identity</i></a></span></li>
    }
    return (
      <nav>
        <div className="nav-wrapper">
            <div className="container margin-padding debugger">
             <div className="row margin-padding debugger ">
               <div className="col margin-padding debugger">
                 <img className="brand-logo center logo debugger" src="https://slack-files.com/files-tmb/T09P4E2TZ-F0A0TB8L9-65253eb432/polisee_moniker_720.png"></img>
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


