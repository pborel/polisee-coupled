var FundingInfo = React.createClass({
  getInitialState: function() {
    return (
      { stuff: "" }
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
      // window.onload = function(){
        var doughnut = window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});
        console.log(doughnut)
      // };
    // var ctx = React.findDOMNode(this.refs.chart).getContext("2d");
    // console.log(ctx)
    // var info = window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});
    // this.setState({stuff: info})
  },

  render: function() {
      var data = {"donor_data":[{"employee_amount":"24400.00","total_amount":"24400.00","total_count":"13","name":"Salesforce.Com","direct_count":"0","employee_count":"13","id":"1defaf99b9294ba1a5eb071be4496e1c","direct_amount":"0"},{"employee_amount":"8300.00","total_amount":"18300.00","total_count":"6","name":"Facebook Inc","direct_count":"2","employee_count":"4","id":"51776e4b60214502bda68c6a7160c497","direct_amount":"10000.00"},{"employee_amount":"5100.00","total_amount":"15100.00","total_count":"4","name":"DLA Piper","direct_count":"2","employee_count":"2","id":"77e30edcce41443194794f9438d6927e","direct_amount":"10000.00"},{"employee_amount":"2500.00","total_amount":"12500.00","total_count":"5","name":"American Dental Assn","direct_count":"4","employee_count":"1","id":"e1f3b5e0d6d1493393baba18fabb8912","direct_amount":"10000.00"},{"employee_amount":"10700.00","total_amount":"10700.00","total_count":"5","name":"University of California","direct_count":"0","employee_count":"5","id":"0e85264c0c0e4dfb9a4b38cfc181f030","direct_amount":"0"},{"employee_amount":"10650.00","total_amount":"10650.00","total_count":"5","name":"Stanford University","direct_count":"0","employee_count":"5","id":"5662459bf8c243d7bbd9f5c85a568e99","direct_amount":"0"},{"employee_amount":"10400.00","total_amount":"10400.00","total_count":"4","name":"Certain Software Inc","direct_count":"0","employee_count":"4","id":"6b3be24e924b464e97e2a13ce2b2b2c1","direct_amount":"0"},{"employee_amount":"10400.00","total_amount":"10400.00","total_count":"4","name":"Chartwell Hotels","direct_count":"0","employee_count":"4","id":"20bc46b762454c87836a5a17824fa736","direct_amount":"0"},{"employee_amount":"10400.00","total_amount":"10400.00","total_count":"4","name":"Ira \u0026 Lenore Gershwin Trust","direct_count":"0","employee_count":"4","id":null,"direct_amount":"0"},{"employee_amount":"10400.00","total_amount":"10400.00","total_count":"4","name":"Gallo Winery","direct_count":"0","employee_count":"4","id":"c19b96a8500f4d489e0eca38b92716bd","direct_amount":"0"}],"sector_data":[{"sector":"F","count":"152","amount":"349100.00"},{"sector":"P","count":"71","amount":"284000.00"},{"sector":"H","count":"118","amount":"272650.00"},{"sector":"Q","count":"204","amount":"218910.00"},{"sector":"B","count":"91","amount":"216150.00"},{"sector":"N","count":"91","amount":"176900.00"},{"sector":"W","count":"139","amount":"172771.00"},{"sector":"K","count":"89","amount":"132950.00"},{"sector":"Y","count":"58","amount":"57000.00"},{"sector":"D","count":"17","amount":"45000.00"}]}

    return (
      <div>
        <canvas ref="chart" id="chart-area" width="500" height="500" />
      </div>
    )
  }
});
        // <Chart1 data={this.state.stuff} />
