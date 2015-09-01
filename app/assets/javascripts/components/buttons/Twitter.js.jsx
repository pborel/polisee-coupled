var Twitter = React.createClass({
  render: function() {
    return (
        <span className="waves-effect btn-flat-large rep-follow-button">
          <a href={this.props.tweet_link}>
            <img src="https://maxcdn.icons8.com/Color/PNG/48/Social_Networks/facebook-48.png" title="Facebook" width="48" />
          </a>
        </span>
    )
  }
});
