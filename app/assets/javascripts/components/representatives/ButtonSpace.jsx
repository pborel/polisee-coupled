var ButtonSpace = React.createClass({
	render: function() {
		return (
			<div className="card-action debugger">
        <Twitter />
				<a href={this.props.data.contact_form} className="waves-effect btn-flat-large rep-follow-button"><img src="https://maxcdn.icons8.com/Color/PNG/48/City/post_office-48.png" title="Post Office" width="48"/></a>
				<a href={this.props.data.website} className="waves-effect btn-flat-large rep-follow-button"><img src="https://maxcdn.icons8.com/Color/PNG/48/Messaging/link-48.png" title="Link" width="48"/></a>
			</div>
		)
	}
})
				// <i className="material-icons right"></i>tweet</a>
			// <span> -- <a href={this.props.tweet_link}>{this.props.twitter_handle}</a></span>





