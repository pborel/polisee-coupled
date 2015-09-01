var RepresentativeBox = React.createClass({
  // getInitialState: function() {
  //   return {reps: this.props.reps};
  // },

  // loadRepresentativesFromServer: function() {
  //   $.ajax({
  //     url: this.props.url,
  //     dataType: 'json',
  //     cache: false,
  //     success: function(data) {
  //       this.setState({data: data});
  //     }.bind(this),
  //     error: function(xhr, status, err) {
  //       console.error(this.props.url, status, err.toString());
  //     }.bind(this)
  //   });
  // },

  // componentDidMount: function() {
  //   this.loadRepresentativesFromServer();
  // },

  render: function() {
    return (
      <RepresentativesList reps={this.props.reps} />
    )
  }
});
