var Article = React.createClass({
  getInitialState: function() {
    return {
      showContent: false,
      favorite: false
     }
  },

  toggleContent: function() {
    this.setState({ showContent: !this.state.showContent });
  },

  toggleFavorite: function() {
    this.setState({ favorite: !this.state.favorite })
    { !this.state.favorite ? this.addToFavorites() : this.removeFromFavorites() }
  },

  addToFavorites: function() {
    $.ajax({
      url: this.props.favoritesUrl + "/create",
      data: { external_id: this.props.data.bill_id },
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log("SUCCESS")
        console.log(data)
      }.bind(this),
      error: function(xhr, status, err) {
        console.log("FAILURE")
        console.error(this.props.favoritesUrl, status, err.toString());
        console.error(this.state.data);
      }.bind(this)
    });
  },

  removeFromFavorites: function() {
    $.ajax({
      url: this.props.favoritesUrl + "/destroy",
      data: { external_id: this.props.data.bill_id },
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data)
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.favoritesUrl, status, err.toString());
        console.error(this.state.data);
      }.bind(this)
    });
  },

  render: function() {
    return (
      <li>
        <div className="collapsible-header article-head-container hoverable">
          <div className="article-head" onClick={this.toggleContent}>
            {this.props.data.short_title ? this.props.data.short_title : this.props.data.official_title}
          </div>
          <div className="favorite">
            { this.state.favorite ? <Favorited parentComponent={this} /> : <NotFavorited parentComponent={this} /> }
          </div>
          </div>
          { this.state.showContent ? <ArticleContent data={this.props.data} /> : null }
      </li>
    );
  }
});
