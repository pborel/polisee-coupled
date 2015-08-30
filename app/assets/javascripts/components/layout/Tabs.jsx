var Tabs = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col s3"><a className="active" href="#test1">Trending</a></li>
            <li className="tab col s3"><a href="#test2">Test 2</a></li>
            <li className="tab col s3"><a href="#test4">Following</a></li>
          </ul>
        </div>
      </div>
    )
  }
});
