var Article = React.createClass({
  getInitialState: function() {
    return {
      showContent: false,
      favorite: false
     }
  },

  toggleContent: function() {
    if(this.state.showContent != true) {
      this.setState({ showContent: true })
    } else {
      this.setState({ showContent: false })
    }
  },

  // addToFavorites: function() {
  //   $.ajax({
  //     url: this.props.favoritesUrl + "/create",
  //     data: { external_id: this.props.data.bill_id },
  //     dataType: 'json',
  //     cache: false,
  //     success: function(data) {
  //       this.setState({favorites: data});
  //     }.bind(this),
  //     error: function(xhr, status, err) {
  //       console.error(this.props.favoritesUrl, status, err.toString());
  //       console.error(this.state.data);
  //     }.bind(this)
  //   });
  // },

  // loadFavoritesFromServer: function() {
  //   $.ajax({
  //     url: this.props.favoritesUrl + "/index",
  //     dataType: 'json',
  //     cache: false,
  //     success: function(data) {
  //       this.setState({favorites: data});
  //     }.bind(this),
  //     error: function(xhr, status, err) {
  //       console.error(this.props.favoritesUrl, status, err.toString());
  //       console.error(this.state.data);
  //     }.bind(this)
  //   });
  // },

  // componentDidMount: function() {
  //   this.loadFavoritesFromServer();
  // },

  render: function() {
    return (
      <li>
        <div className="collapsible-header" onClick={this.toggleContent}>
          {this.props.data.short_title ? this.props.data.short_title : this.props.data.official_title}
          <Favorited handleClick={this.updateFavorites} />
        </div>

        { this.state.showContent ? <Content data={this.props.data} /> : null }
      </li>
    );
  }
});
