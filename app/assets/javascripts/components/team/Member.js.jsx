var Member = React.createClass({
  render: function() {
  // var email = "mailto:" + {this.props.data.email}
    return (
      <div className={this.props.data.name}>
        <h2>Name: {this.props.data.name}</h2>

        Bio: {this.props.data.github_url}<br/>

        <a href={this.props.data.github_url} className="waves-effect btn-flat-large rep-follow-button"><img src="https://maxcdn.icons8.com/Color/PNG/48/City/post_office-48.png" title="Post Office" width="48"/></a>

        <a href={this.props.data.linkedin_url} className="waves-effect btn-flat-large rep-follow-button"><img src="https://maxcdn.icons8.com/Color/PNG/48/City/post_office-48.png" title="Post Office" width="48"/></a>

        <a href={this.props.data.website_url} className="waves-effect btn-flat-large rep-follow-button"><img src="https://maxcdn.icons8.com/Color/PNG/48/Messaging/link-48.png" title="Link" width="48"/></a>

        <a href={this.props.data.email} className="waves-effect btn-flat-large rep-follow-button"><img src="https://maxcdn.icons8.com/Color/PNG/48/City/post_office-48.png" title="Post Office" width="48"/></a>
      </div>
    );
  }
});



        // Linkedin: {this.props.data.linkedin_url}<br/>
        // Github: {this.props.data.github_url}<br/>
        // {this.props.data.website_url ? "Website: " + this.props.data.website_url : null}
