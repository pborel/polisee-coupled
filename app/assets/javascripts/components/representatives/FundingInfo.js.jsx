var FundingInfo = React.createClass({
  componentDidMount: function() {
    var doughnutData = [
        {
          value: this.props.donorData[0].total_amount,
          color:"#F7464A",
          highlight: "#FF5A5E",
          label: this.props.donorData[0].name
        },
        {
          value: this.props.donorData[1].total_amount,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: this.props.donorData[1].name
        },
        {
          value: this.props.donorData[2].total_amount,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: this.props.donorData[2].name
        },
        {
          value: this.props.donorData[3].total_amount,
          color: "#949FB1",
          highlight: "#A8B3C5",
          label: this.props.donorData[3].name
        },
        {
          value: this.props.donorData[4].total_amount,
          color: "#4D5360",
          highlight: "#616774",
          label: this.props.donorData[4].name
        },
        {
          value: this.props.donorData[5].total_amount,
          color:"#F7464A",
          highlight: "#FF5A5E",
          label: this.props.donorData[5].name
        },
        {
          value: this.props.donorData[6].total_amount,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: this.props.donorData[6].name
        },
        {
          value: this.props.donorData[7].total_amount,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: this.props.donorData[7].name
        },
        {
          value: this.props.donorData[8].total_amount,
          color: "#949FB1",
          highlight: "#A8B3C5",
          label: this.props.donorData[8].name
        },
        {
          value: this.props.donorData[9].total_amount,
          color: "#4D5360",
          highlight: "#616774",
          label: this.props.donorData[9].name
        }
      ];

      var ctx = React.findDOMNode(this.refs.chart).getContext("2d");
      var Doughnut = new Chart(ctx).Doughnut(doughnutData);

      this.props.parentComponent.getCycleFundingData()
  },

  render: function() {
    return (
      <div>
        <br/>
        <canvas id="chart-area" ref="chart" max-width="300" max-height="300"/>
        <br/><br/>
        <b>2014 Funding: </b> ${this.props.total}
        <br/>
      </div>
    )
  }
});
