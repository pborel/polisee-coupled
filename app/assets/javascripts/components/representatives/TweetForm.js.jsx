var TweetForm = React.createClass({
  render: function() {
    return (
      <div className="row">
        <hr />
        <form className="col s12" action="tweets" method="post">
          <div className="row">
            <div className="input-field col s12">
              <input id="tweet" type="text" length="144" />
              <label forHtml="tweet">Tweet</label>
              <input type="button" name="tweet" value="Tweet" />
            </div>
          </div>
        </form>
      </div>
    )
  }
})
