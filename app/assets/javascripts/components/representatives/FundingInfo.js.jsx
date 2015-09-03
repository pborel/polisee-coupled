var FundingInfo = React.createClass({
  getInitialState: function() {
    return (
      { data: "" }
    )
  },

  componentDidMount: function() {
    var doughnutData = [
        {
          value: 300,
          color:"#F7464A",
          highlight: "#FF5A5E",
          label: "Red"
        },
        {
          value: 50,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Green"
        },
        {
          value: 100,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "Yellow"
        },
        {
          value: 40,
          color: "#949FB1",
          highlight: "#A8B3C5",
          label: "Grey"
        },
        {
          value: 120,
          color: "#4D5360",
          highlight: "#616774",
          label: "Dark Grey"
        }

      ];

      var ctx = React.findDOMNode(this.refs.chart).getContext("2d");
      var Doughnut = new Chart(ctx).Doughnut(doughnutData);
    // this.setState({stuff: info})
  },

  render: function() {
    return (
      <div>
        <br/>
        <canvas id="chart-area" ref="chart" min-width="300" min-height="300"/>
        <br/>
      </div>
    )
  }
});
        // <Chart1 data={this.state.stuff} />
