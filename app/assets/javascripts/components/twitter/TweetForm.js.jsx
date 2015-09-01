var TweetForm = React.createClass({
  getInitialState: function() {
    return({ message: "@" + this.props.handle + " #polisee.io " })
  },
  // postTweet: function() {
  //   $.ajax({
  //     url: "/tweets",
  //     method: "POST",
  //     data: { message:  },
  //     dataType: 'json',
  //     cache: false,
  //     success: function(data) {
  //       console.log("SUCCESS")
  //       console.log(data)
  //     }.bind(this),
  //     error: function(xhr, status, err) {
  //       console.log("FAILURE")
  //       console.error(this.props.favoritesUrl, status, err.toString());
  //       console.error(this.state.data);
  //     }.bind(this)
  //   });
  // },

  submit: function (e) {
    e.preventDefault()

    var tweet = {
      message: this.state.message
    }

    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: tweet,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log("SUCCESS");
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        this.clearForm()
        // add modal here
        console.log("FAILURE");
        console.error('/tweets', status, err.toString());
        console.error(this.state.tweet);
      }.bind(this)
      // done: function(data) {
        // this.clearForm()
        // add modal here
      // }.bind(this)
    });
  },

  clearForm: function() {
    this.setState({
      message: "@" + this.props.handle + " #polisee.io "
    });
  },

  messageChange: function(e) {
    this.setState({ message: e.target.value })
  },

  render: function() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.submit}>
          <div className="input-field col s12">
          <MessageBox valChange={this.messageChange} val={this.state.message} />
          <button className="btn waves-effect waves-light" type="submit"><i className="fi-social-twitter"></i></button>
          </div>
        </form>
      </div>
    );
  }
})
