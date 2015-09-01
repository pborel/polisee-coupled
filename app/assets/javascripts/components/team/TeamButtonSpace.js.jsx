var TeamButtonSpace = React.createClass({
  render: function() {
    return (
      <div className="card-action">
        <a href={this.props.data.website_url} className="waves-effect btn-flat-large rep-follow-button"><img src="https://maxcdn.icons8.com/Color/PNG/48/Messaging/link-48.png" title="Link" width="48"/></a>
        <a href={this.props.data.github_url} className="waves-effect btn-flat-large rep-follow-button"><i className="fi-social-github medium github"></i></a>
        <a href={this.props.data.linkedin_url} className="waves-effect btn-flat-large rep-follow-button"><i className="fi-social-linkedin medium linkedin"></i></a>
        <a href={this.props.data.twitter_url} className="waves-effect btn-flat-large rep-follow-button"><i className="fi-social-twitter medium twitter"></i></a>
      </div>
    )
  }
});
