var SearchFilter = React.createClass({

  submitChange: function (event) {
    event.preventDefault()
    var searchInput = React.findDOMNode(this.refs.search).value
    this.props.handleQueryChange(searchInput)
  },

  submitQuery: function(event) {
    event.preventDefault()
    var searchInput = React.findDOMNode(this.refs.search).value
    this.props.handleSearch(searchInput)
  },

  render: function(){
    return (
      <form onSubmit={this.submitQuery}>
          <div className="input-field">
            <input id="search" type="search" placeholder="Search" ref="search" onChange={this.submitChange} />
            <label forName="search"><i className="material-icons">search</i></label>
          </div>
      </form>
    )
  }
});
