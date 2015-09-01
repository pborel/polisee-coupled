var Favorited = React.createClass({
  // handleClick: function() {
    // console.log("scary")
  // },

  render: function() {
    return (
      <span onClick={this.props.parentComponent.toggleFavorite}>
        <i className="tiny material-icons fav-icon right favorited">grade</i>
      </span>
    )
  }
})
// + {this.props.isFavorite}
