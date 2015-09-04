var Representative = React.createClass({
  getInitialState: function() { return ({ donorData: "" }) },

  getDonorInfo: function() {
    var repDonorsUrl = "/legislators/" + this.props.data.id + "/donors"
    $.ajax({
      url: repDonorsUrl,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({ donorData: data.donor_data })
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(repDonorsUrl, status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.getDonorInfo()
  },

  getInitialState: function() {
    return ({ fundingInfoActive: false })
  },

  toggleFundingInfo: function() {
    this.setState({ fundingInfoActive: !this.state.fundingInfoActive })
  },

  render: function() {
    var handle = "https://twitter.com/" + this.props.data.twitter_id
    var facebook = "https://facebook.com/" + this.props.data.facebook_id
    return (
      <div className="card rep-card hoverable">
      	<RepPicture url={this.props.data.image} />
      	<RepName url={this.props.data.website} title={this.props.data.title} first_name={this.props.data.first_name} last_name={this.props.data.last_name} party={this.props.data.party} />
      	<ButtonSpace parentComponent={this} tweet_link={handle} twitter_handle={this.props.data.twitter_id} data={this.props.data} donorData={this.state.donorData} facebook_link={facebook} fundingInfoActive={this.state.fundingInfoActive} />
        <RepBio data={this.props.data} />
      </div>
    )
  }
});

