var RepresentativesList = React.createClass({
  render: function() {
    debugger
    var representativeNodes = this.props.reps.map(function(representative) {
      var handle = "https://twitter.com/" + representative.twitter_id
      return (
        <Representative data={representative} key={representative.id}>

        </Representative>
        )
    });

    return (
      <span>
        {representativeNodes}
      </span>
    );
  }
});
