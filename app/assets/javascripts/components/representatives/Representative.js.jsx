var Representative = React.createClass({
  render: function() {
    var handle = "https://twitter.com/" + this.props.data.twitter_id
    var facebook = "https://facebook.com/" + this.props.data.facebook_id
    console.log(this.props.data)
    return (
      <div className="card rep-card hoverable">
      	<RepPicture url={this.props.data.image} />
      	<RepName url={this.props.data.website} title={this.props.data.title} first_name={this.props.data.first_name} last_name={this.props.data.last_name} party={this.props.data.party} />
      	<ButtonSpace tweet_link={handle} twitter_handle={this.props.data.twitter_id} data={this.props.data} facebook_link={facebook} />
        <RepBio data={this.props.data} />
      </div>
    )
  }
});

