var RepresentativeList = React.createClass({
  render: function() {
    var representativeNodes = this.props.reps.map(function(representative) {
      var handle = "https://twitter.com/" + representative.twitter_id
      return (
        <Representative data={representative} key={representative.id} />
        )
    });

    return (
      <span>
        {representativeNodes}
      </span>
    );
  }
});
