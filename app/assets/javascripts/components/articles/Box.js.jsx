var ArticleBox = React.createClass({
  getInitialState: function() {
    return {
      currentTab: "index",
      data: [],
      originalList: []
    };
  },

  handleQueryChangeSubmit: function(query) {
    var regExp = new RegExp(query)
    var bills = this.state.originalList
    var newData = []

    for (var index in bills) {
      if (bills[index].short_title === null) {
        if (bills[index].official_title.match(regExp)) {
          newData.push(bills[index])
        }
      }
      else {
        if (bills[index].short_title.match(regExp)) {
          newData.push(bills[index])
        }
      }
    }

    if (newData.length > 0) {
      this.setState({data: newData})
    }
  },

  handleSearchSubmit: function(query) {

    $.ajax({
      url: '/bills/search',
      dataType: 'json',
      data: {query: query},
      cache: false,
      success: function(data) {
        debugger
        this.setState({data: data.results});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('/check', status, err.toString());
        console.error(this.state.data);
      }.bind(this)
    });
  },

  loadArticlesFromServer: function(tab, link) {

    $.ajax({
      data: { tabName: tab },
      url: link,
      dataType: 'json',
      cache: false,
      success: function(data) {

        this.setState({data: data, originalList: data});
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
    this.setState({ currentTab: tab })
    this.loadArticlesFromServer(tab, link);
  },

  render: function() {
    return (
      <div className="debugger articles-box">
        <SearchFilter handleQueryChange={this.handleQueryChangeSubmit} handleSearch={this.handleSearchSubmit}/>
        <Tabs parentElement={this} handleClick={this.updateListView} />
        <ArticleList data={this.state.data} favoritesUrl={this.props.favoritesUrl} />
      </div>
    )
  }
});
