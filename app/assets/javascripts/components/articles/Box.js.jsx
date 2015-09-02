var ArticleBox = React.createClass({
  getInitialState: function() {
    return {
      currentTab: "index",
      data: [],
      originalList: []
    };
  },

  // SEARCH FILTER AND SUBMIT METHODS
  handleSearchSubmit: function(query) {
    if (query === "") {
      this.handleEmpty(query)
    }
    else {
      $.ajax({
        url: '/bills/search',
        dataType: 'json',
        data: {query: query},
        cache: false,
        success: function(data) {
            if (data.count === 0) {
              console.log("no data found")
              this.setState({data: this.state.originalList})
            }
            else {
              this.setState({data: data.results});
            }
        }.bind(this),
        error: function(xhr, status, err) {
          console.error('bills/search', status, err.toString());
          console.error(this.state.data);
        }.bind(this)
      });
    }
  },

  handleQueryChange: function(query) {
    var regEx = new RegExp(query)
    var bills = this.state.data
    var newBills = []
    for (var index in bills) {
      this.searchFor(bills[index], regEx, newBills)
    }
    this.handleFound(newBills)
    if (query === "") {
          this.handleEmpty(query)
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

  handleEmpty: function (query) {
      this.setState({data: this.state.originalList})
  },



  // INITIAL LOAD
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
        <SearchFilter parentComponent={this}/>
        <Tabs parentElement={this} handleClick={this.updateListView} />
        <ArticleList data={this.state.data} favoritesUrl={this.props.favoritesUrl} />
      </div>
    )
  }
});