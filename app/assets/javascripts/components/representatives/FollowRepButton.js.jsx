var ButtonSpace = React.createClass({
	getInitialState: function() {
		return ({ latestFundingData: "" })
	},

	getCycleFundingData: function() {
		var thisUrl = '/legislators/' + this.props.data.id
		$.ajax({
			method: 'get',
      url: thisUrl,
      dataType: 'json',
      cache: false,
      success: function(data) {
      	this.formatFundingData(data)
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(thisUrl, status, err.toString());
        console.error(this.state.message);
      }.bind(this)

		})
	},

	formatFundingData: function(data) {
		var latestYear = data.cycle_details[data.cycle_details.length - 1]
		var latestYearAmount = latestYear.amount
		this.numberWithCommas(latestYearAmount)
	},

	numberWithCommas: function(total) {
    var final = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.setState({ latestFundingData: final })
	},

	// componentDidMount: function() {
	// 	this.getCycleFundingData()
	// },

	render: function() {
		console.log(this.state.latestFundingData)
		return (
			<div className="card-action debugger">
				<a href={this.props.tweet_link}className="waves-effect btn-flat-large rep-follow-button"> <img src="https://maxcdn.icons8.com/Color/PNG/48/Social_Networks/twitter-48.png" title="Twitter" width="48" /> </a>
				<a href={this.props.facebook_link} className="waves-effect btn-flat-large rep-follow-button"><img src="https://maxcdn.icons8.com/Color/PNG/48/Social_Networks/facebook-48.png" title="Facebook" width="48" /></a>
				<a href={this.props.data.contact_form} className="waves-effect btn-flat-large rep-follow-button"><img src="https://maxcdn.icons8.com/Color/PNG/48/City/post_office-48.png" title="Post Office" width="48"/></a>
				<a href={this.props.data.website} className="waves-effect btn-flat-large rep-follow-button"><img src="https://maxcdn.icons8.com/Color/PNG/48/Messaging/link-48.png" title="Link" width="48"/></a>

				<br/>
				<br/>
				<a className="waves-effect waves-light white-text btn" onClick={this.props.parentComponent.toggleFundingInfo}><i className="fi-dollar left"></i>Funding Info</a>
				<br/>
        { this.props.fundingInfoActive ? <FundingInfo parentComponent={this} total={this.state.latestFundingData} donorData={this.props.donorData} /> : null }
        <br/>
			</div>
		)
	}
})
				// <i className="material-icons right"></i>tweet</a>
			// <span> -- <a href={this.props.tweet_link}>{this.props.twitter_handle}</a></span>
