var Representative = React.createClass({
  render: function() {
  	var handle = "https://twitter.com/" + this.props.data.twitter_id
    console.log(this.props.data)
    return (
      <span>
        <div className="card rep-card">
        	< RepPicture url={this.props.data.image} />
        	< RepName first_name={this.props.data.first_name} last_name={this.props.data.last_name} />
        	< FollowRepButton tweet_link={handle} twitter_handle={this.props.data.twitter_id} />
          < RepBio  data={this.props.data}/>
          
        </div>
      </span>
    )
  }
});

          // < CardReveal />





