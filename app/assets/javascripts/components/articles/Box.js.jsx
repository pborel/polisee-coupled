var ArticleBox = React.createClass({
  getInitialState: function() {
    return {
      currentTab: "index",
      data: []
    };
  },

  loadArticlesFromServer: function(tab, link) {
    $.ajax({
      data: { tabName: tab },
      url: link,
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
    var link = this.props.url
    this.loadArticlesFromServer(tab, link);
  },

  updateListView: function(tab, link) {
    // console.log("hitting Box")
    this.setState({ currentTab: tab })
    this.loadArticlesFromServer(tab, link);
  },

  render: function() {
    return (
      <div className="debugger articles-box">
        <SearchFilter />
        <Tabs parentElement={this} handleClick={this.updateListView} />
        <ArticleList data={this.state.data} favoritesUrl={this.props.favoritesUrl} />
        <hr />
      </div>
    )
  }
});
