var SponsorList = React.createClass({
  render: function() {
    var publicSponsors = this.props.latestFundingInfo[0]
    var governmentSponsors = this.props.latestFundingInfo[1]
    return (
      <div>
        <hr/>
        <span className="card-title grey-text text-darken-4">Latest Funding Info</span>
        <hr/>
        <p className="card-info">
          <b>Public Sponsors:</b> {publicSponsors}<br/><br/>
          <b>Government Sponsors:</b> {governmentSponsors}
        </p>
      </div>
    )
  }
});

// var SponsorList = React.createClass({
//   getInitialState: function() {
//     return({ sponsors: [] })
//   },

//   buildSponsors: function(sponsorList) {
//     var sponsors = sponsorList.map(this.buildSponsor)
//     console.log(sponsors)
//     this.setState({ sponsors: sponsors })
//   },

//   buildSponsor: function(data) {
//     return <Sponsor data={data} />
//   },

//   componentDidUpdate: function() {
//     this.buildSponsors(this.props.latestFundingInfo)
//     // return sponsors
//   },

//   render: function() {
//     // var publicSponsors = this.props.latestFundingInfo[0]
//     // var governmentSponsors = this.props.latestFundingInfo[1]
//     return (
//       <div>
//         <hr/>
//         <span className="card-title grey-text text-darken-4">Latest Funding Info</span>
//         <hr/>
//         <p className="card-info">
//           {this.state.sponsors}
//         </p>
//       </div>
//     )
//   }
// });
