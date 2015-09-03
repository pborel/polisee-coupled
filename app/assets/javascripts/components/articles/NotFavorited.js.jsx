var NotFavorited = React.createClass({
  render: function() {
    return (
      <span onClick={this.props.parentComponent.toggleFavorite}>
        <i className="tiny material-icons fav-icon right not-favorited debugger">grade</i>
      </span>
    )
  }
})
