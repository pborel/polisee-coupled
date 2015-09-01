var TeamName = React.createClass({
  render: function() {
    return (
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {this.props.name}
          <i className="material-icons right">more_vert</i>
        </span>
      </div>
    )
  }
})
