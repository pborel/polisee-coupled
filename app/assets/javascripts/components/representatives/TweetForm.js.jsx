var TweetForm = React.createClass({
  render: function() {
    return (
      <div className="row">
        <hr />
        <form className="col s12" action="/tweets" method="post">
          <div className="row">
            <div className="input-field col s12">
              <input id="tweet" type="text" length="144" />
              <label forHtml="tweet">Message</label>
              <button className="btn waves-effect waves-light" type="submit" name="action">Tweet
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
})
