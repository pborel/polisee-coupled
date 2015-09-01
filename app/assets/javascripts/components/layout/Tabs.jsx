var Tabs = React.createClass({

  handleClick: function(tab) {
    // console.log("hitting tabs")
    this.props.parentElement.updateListView(tab)
  },

  render: function() {
    return (
      <div className="row tabs debugger">
        <div className="col s12 debugger">
          <ul className="tabs pop-out z-depth-1 debugger">
            <IndexTab parentElement={this} tab={"index"} onClick={this.handleClick} />
            <UpcomingTab parentElement={this} tab={"upcoming"} onClick={this.handleClick} />
            <FollowingTab parentElement={this} tab={"following"} onClick={this.handleClick} />
          </ul>
        </div>
      </div>
    )
  }
});
            // <li className="tab col s3"><a className="active" href="#test1">Trending</a></li>
            // <li className="tab col s3"><a href="#test2">Test 2</a></li>
            // <li className="tab col s3"><a href="#test4">Hello</a></li>
            // <Tab2 />
            // <Tab3 />
