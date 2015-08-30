// var React = require('react')

// var List = require('./List.jsx')
// var SearchFilter = require('../layout/SearchFilter.jsx')
// var Tab = require('../layout/Tab.jsx')

module.exports = React.createClass({
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
    this.loadArticlesFromServer();
  },

  render: function() {
    return (
      <div className="debugger articles-box">
        <SearchFilter />
        <List data={this.state.data} />
        <hr />
      </div>
    )
  }
});
