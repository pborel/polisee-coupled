var RepresentativeBox = React.createClass({
  render: function() {
    return (
      <RepresentativeList reps={this.props.reps} signedIn={this.props.signedIn} />
    )
  }
});
