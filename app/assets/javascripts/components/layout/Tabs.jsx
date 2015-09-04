var Tabs = React.createClass({
  handleClick: function(tab, link) {
    event.preventDefault()
    this.props.handleClick(tab, link)
  },

  render: function() {
    return (
      <div className="row tabs">
          <ul className="tabs z-depth-1 cyan lighten-5" >
            <IndexTab parentElement={this} tab={"index"} onClick={this.handleClick} />
            <UpcomingTab parentElement={this} tab={"upcoming"} onClick={this.handleClick} />
            <FollowingTab parentElement={this} tab={"following"} onClick={this.handleClick} />
          </ul>
      </div>
    )
  }
});
