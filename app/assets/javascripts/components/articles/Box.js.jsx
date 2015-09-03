var ArticleBox = React.createClass({
  getInitialState: function() {
    return {
      currentTab: "index",
      data: [],
      originalList: [],
      filterComparison: [],
      following: false
    };
  },

  // SEARCH FILTER AND SUBMIT METHODS (lines 12 = 75)
  handleSearchSubmit: function(query) {
    if (query === "") {
      this.handleEmptyQuery()
    }
    else {
      this.handleSearchQuerySubmit(query)
    }
  },

  handleSearchQuerySubmit: function(queryString) {
    $.ajax({
      url: '/bills/search',
      dataType: 'json',
      data: {query: queryString},
      cache: false,
      success: function(data) {
          if (data.count === 0) {
            console.log("no data found")
            this.setState({data: this.state.originalList})
          }
          else {
            this.setState({data: data.results, filterComparison: data.results});
          }
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('bills/search', status, err.toString());
        console.error(this.state.data);
      }.bind(this)
    });
  },

  handleQueryChange: function(query) {
    if (query === "") {
          this.handleEmptyQuery()
    }
    else {
      var regEx = new RegExp(query)
      var bills = this.state.filterComparison
      var newBills = []
      for (var index in bills) {
        this.searchFor(bills[index], regEx, newBills)
      }
      this.handleFound(newBills)
    }
  },

  searchFor: function(bill, query, foundBills) {
    if (bill.short_title === null) {
        if (bill.official_title.toLowerCase().match(query)) {
          foundBills.push(bill)
        }
    }
    else {
        if (bill.short_title.toLowerCase().match(query)) {
            foundBills.push(bill)
        }
    }
  },

  handleFound: function (foundBills) {
    if (foundBills.length > 0) {
      this.setState({data: foundBills})
    }
  },

  handleEmptyQuery: function () {
      this.setState({data: this.state.filterComparison})
  },



  // INITIAL LOAD
  loadArticlesFromServer: function(tab, link, followingStatus) {

    $.ajax({
      data: { tabName: tab },
      url: link,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({currentTab: tab, data: data, originalList: data, filterComparison: data, following: followingStatus});
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
    this.loadArticlesFromServer(tab, link, this.state.following);
  },

  updateListView: function(tab, link) {
    if (tab==="following") {
      this.loadArticlesFromServer(tab, link, true);
    }
    else {
      this.loadArticlesFromServer(tab, link, false);
    }
  },

  render: function() {
    return (

      <div className="debugger articles-box">
        <SearchFilter parentComponent={this}/>
        <Tabs handleClick={this.updateListView} />
        <ArticleList data={this.state.data} favoritesUrl={this.props.favoritesUrl} following={this.state.following}/>
      </div>
    )
  }
});
