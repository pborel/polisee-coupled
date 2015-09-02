var SearchFilter = React.createClass({

  submitSearch: function (event) {
    event.preventDefault()
    var searchInput = React.findDOMNode(this.refs.search).value
    this.props.handleSearch(searchInput)
  },

  render: function(){
    return (
      <form >
          <div className="input-field">
            <input id="search" type="search" placeholder="Search" ref="search" onChange={this.submitSearch} />
            <label forName="search"><i className="material-icons">search</i></label>
          </div>
      </form>
    )
  }
});
