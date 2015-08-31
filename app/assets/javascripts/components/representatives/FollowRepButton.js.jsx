var FollowRepButton = React.createClass({
	render: function() {
		return (
			<div className="card-action debugger">
				<a href={this.props.tweet_link}className="waves-effect btn-flat-large rep-follow-button"> <img src="https://maxcdn.icons8.com/Color/PNG/48/Social_Networks/twitter-48.png" title="Twitter" width="48" /> </a>
				<a href={this.props.facebook_link} className="waves-effect btn-flat-large rep-follow-button"><img src="https://maxcdn.icons8.com/Color/PNG/48/Social_Networks/facebook-48.png" title="Facebook" width="48" /></a> 
			</div>
		)
	}
})
				// <i className="material-icons right"></i>tweet</a>
			// <span> -- <a href={this.props.tweet_link}>{this.props.twitter_handle}</a></span>



			

			