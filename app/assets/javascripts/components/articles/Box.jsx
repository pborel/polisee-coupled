var Box = React.createClass({
  getInitialState: function() {
    return {data: []};
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
      }.bind(this)
    });
  },

  componentDidMount: function() {
    // this.loadArticlesFromServer();
  },

  render: function() {
    return (
      <div className="debugger articles-box">
        // <List data={this.state.data} />
        <SearchFilter />
        <hr />
      </div>
    )
  }
});
