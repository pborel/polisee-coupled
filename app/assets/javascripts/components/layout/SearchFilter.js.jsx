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

  render: function() {
    return (
      <nav className="cyan lighten-2">
        <div className="nav-wrapper search-bar tab-search">
          <form onSubmit={this.submitQuery}>
              <div className="input-field">
                <input id="search" type="search" placeholder="Search" ref="search" onChange={this.submitChange} required/>
                <label forHTML="search"><i className="material-icons">search</i></label>
              </div>
          </form>
        </div>
      </nav>
    )
  }
});
 // color="e3f2fd"
