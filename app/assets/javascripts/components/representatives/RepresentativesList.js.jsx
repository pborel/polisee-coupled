var RepresentativesList = React.createClass({
  render: function() {
    var representativeNodes = this.props.data.map(function(representative) {
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
