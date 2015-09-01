var Favorited = React.createClass({
  // handleClick: function() {
    // console.log("scary")
  // },

  render: function() {
    return (
      <span onClick={this.props.handleClick}>
        <i className="tiny material-icons fav-icon right">grade</i>
      </span>
    )
  }
})
// + {this.props.isFavorite}
