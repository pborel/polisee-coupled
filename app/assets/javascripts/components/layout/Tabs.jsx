var Tabs = React.createClass({

  componentDidMount: function() {
  },

  render: function() {
    return (
      <div className="row debugger">
        <div className="col s12 debugger">
          <ul className="tabs pop-out z-depth-1 debugger">
            <IndexTab />
            <UpcomingTab />
            <FollowingTab />
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
