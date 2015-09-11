var ArticleContent = React.createClass({
  render: function() {
    return (
      <div className="collection-item">
        <div className="col s12 offset-l1 l10">
          <div className="card white">
            <div className="card-content">
              <p>
                <h5>Description:</h5>
                <b>Official Title: </b>{this.props.data.official_title}<br/>
                <b>Sponsor:</b> {this.props.data.sponsor.title ? this.props.data.sponsor.title : null}. {this.props.data.sponsor.first_name} {this.props.data.sponsor.last_name}<br/>
                <b>Cosponsors:</b> { this.props.data.cosponsors_count }<br/>
                <b>Withdrawals:</b> { this.props.data.withdrawn_cosponsors_count }<br/>
                <hr/>

                <h5>Status:</h5>
                <b>Introduced:</b> {this.props.data.introduced_on ? this.props.data.introduced_on : null}<br/>
                 <b>Active:</b> {this.props.data.history.active ? "True" : "False"}<br/>
                {this.props.data.history.active ? "Awaiting Signature: True" + <br/> : null}
                <b>Enacted:</b> {this.props.data.history.enacted ? "True," : "False"}<br/>
                <b>Vetoed:</b> {this.props.data.history.vetoed ? "True" : "False"}<br/>
                <b>Chamber:</b> {this.props.data.chamber.capitalizeFirstLetter()}
              </p>
            </div>

            <div className="card-action">
              <TweetForm subject={""} />
            </div>
          </div>
        </div>
      </div>
    );
  }
});
              // <a href={this.props.data.urls.opencongress}>More info</a>

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
                // <b>Last Action: </b> {this.props.data.last_version.version_name} on {this.props.data.last_action_at}<br/>
