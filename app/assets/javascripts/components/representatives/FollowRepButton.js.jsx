var FollowRepButton = React.createClass({
	render: function() {
		return (
			<p><a href={this.props.tweet_link}className="waves-effect waves-light btn"><i className="material-icons right"></i>tweet</a></p>
		)
	}
})
			// <span> -- <a href={this.props.tweet_link}>{this.props.twitter_handle}</a></span>