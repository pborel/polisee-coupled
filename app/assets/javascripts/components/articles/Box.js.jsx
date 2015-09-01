var Box = React.createClass({
  getInitialState: function() {
    return {
      currentTab: "index",
      data: []
    };
  },

  loadArticlesFromServer: function(tab) {
    console.log(tab)
    $.ajax({
      data: { tabName: tab },
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
    var tab = "index"
    this.loadArticlesFromServer(tab);
  },

  updateListView: function(tab) {
    // console.log("hitting Box")
    this.setState({currentTab: tab})
    this.loadArticlesFromServer(tab);
  },

  render: function() {
    return (
      <div className="debugger articles-box">
        <SearchFilter />
        <Tabs parentElement={this} handleClick={this.updateListView} />
        <List data={this.state.data} />
        <hr />
      </div>
    )
  }
});
// .bind(this, tab)
