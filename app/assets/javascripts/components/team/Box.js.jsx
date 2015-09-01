var TeamBox = React.createClass({
  getInitialState: function() {
    return {
      data: []
    };
  },

  loadArticlesFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
        console.error(this.state.data);
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.loadArticlesFromServer();
  },

  render: function() {
    return (
      <div className="team-box">
        <TeamList data={this.state.data} />
      </div>
    )
  }
});
