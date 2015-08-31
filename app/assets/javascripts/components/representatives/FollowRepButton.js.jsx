var FollowRepButton = React.createClass({
	render: function() {
		return (
			<span> -- <a href={this.props.tweet_link}>{this.props.twitter_handle}</a></span>
		)
	}
})