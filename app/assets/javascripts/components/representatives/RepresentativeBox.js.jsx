var RepresentativeBox = React.createClass({
  render: function() {
    return (
      <RepresentativesList reps={this.props.reps} signedIn={this.props.signedIn} />
    )
  }
});
