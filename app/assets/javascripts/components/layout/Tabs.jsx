var Tabs = React.createClass({
  handleClick: function(tab, link) {
    // console.log("hitting tabs")
    this.props.parentElement.updateListView(tab, link)
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
            // <li className="tab col s3"><a className="active" href="#test1">Trending</a></li>
            // <li className="tab col s3"><a href="#test2">Test 2</a></li>
            // <li className="tab col s3"><a href="#test4">Hello</a></li>
            // <Tab2 />
            // <Tab3 />
