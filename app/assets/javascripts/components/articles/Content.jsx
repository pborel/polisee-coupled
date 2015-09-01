var Content = React.createClass({
  render: function() {
    return (
      <div className="row debugger">
        <div className="col s12 offset-l1 l10 debugger">
          <div className="card-panel blue debugger">
            <span className="white-text debugger">
                <h4 className="section debugger">Official Title:</h4> {this.props.data.official_title}<br/>
                <h4>Sponsor:</h4> {this.props.data.sponsor.title ? this.props.data.sponsor.title : null} {this.props.data.sponsor.first_name} {this.props.data.sponsor.last_name}<br/>
                <h5>Introduced on:</h5> {this.props.data.introduced_on ? this.props.data.introduced_on : null}
                <h5>Last Action: </h5> {this.props.data.last_version.version_name} on {this.props.data.last_version.issued_on}
                <h5>Status:</h5> Active: {this.props.data.history.active ? "true," : "false,"}<br/>
                {this.props.data.history.active ? "Awaiting Signature: true" + <br/> : null}
                <h5>Enacted: </h5>{this.props.data.history.enacted ? "true," : "false,"}<br/>
                <h5>Vetoed: </h5>{this.props.data.history.vetoed ? "true" : "false"}
                <h5>Chamber: </h5> {this.props.data.chamber}
                <h5>Number of Cosponsors: </h5> { this.props.data.cosponsors_count }
                <h5>Number of Withdrawals: </h5> { this.props.data.withdrawn_cosponsors_count }

                <hr/>
                <a href={this.props.data.urls.opencongress}>More info.</a>
            </span>
          </div>
        </div>
      </div>

    );
  }
});


        // <div className="bill-content container">
