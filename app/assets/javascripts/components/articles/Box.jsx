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
        console.error(this.state.data);
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.loadArticlesFromServer();
  },

  updateListView: function() {
    this.loadArticlesFromServer();
    setState({data})
  },

  render: function() {
    return (
      <div className="debugger articles-box">
        <SearchFilter />
        <Tabs handleClick={this.updateListView} />
        <List data={this.state.data} />
        <hr />
      </div>
    )
  }
});
