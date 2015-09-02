// var SponsorList = React.createClass({
//   buildSponsors: function(articleList) {
//     var sponsors = sponsorList.map(this.buildSponsors)
//     return sponsors;
//   },

//   buildSponsor: function(article) {
//     return <Article data={article} favoritesUrl={this.props.favoritesUrl} />
//   },

//   render: function() {
//     // var sponsors = this.buildSponsors(this.props.latestFundingInfo[0])
//     var publicSponsors = this.props.latestFundingInfo[0]
//     var governmentSponsors = this.props.latestFundingInfo[1]
//     // console.log(this.publicSponsors.length)
//     return (
//       <div>
//         <hr/>
//         <span className="card-title grey-text text-darken-4">Latest Funding Info</span>
//         <hr/>
//         <p className="card-info">
//           <b>Public Sponsors:</b> {publicSponsors}<br/><br/>
//           <b>Government Sponsors:</b> {governmentSponsors}
//         </p>
//       </div>
//     )
//   }
// });
var SponsorList = React.createClass({
  getInitialState: function() {
    return({ sponsors: [] })
  },

  buildSponsors: function(sponsorList) {
    var sponsors = sponsorList.map(this.buildSponsor)
    this.setState({ sponsors: sponsors })
  },

  buildSponsor: function(data) {
    return <Sponsor data={data} />
  },

  componentDidUpdate: function() {
    this.buildSponsors(this.props.latestFundingInfo.donor_data)
    // return sponsors
  },

  render: function() {
    // var publicSponsors = this.props.latestFundingInfo[0]
    // var governmentSponsors = this.props.latestFundingInfo[1]
    return (
      <div>
        <hr/>
        <span className="card-title grey-text text-darken-4">Latest Funding Info</span>
        <hr/>
        <p className="card-info">
          {this.state.sponsors}
        </p>
      </div>
    )
  }
});
          // <b>Government Sponsors:</b> {governmentSponsors}
