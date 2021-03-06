var TweetForm = React.createClass({
  getInitialState: function() {
    return {
      message: this.props.subject + "#polisee.io ",
      signedIn: this.checkSignedIn()
    }
  },

  checkSignedIn: function() {
    $.ajax({
      url: '/check',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({signedIn: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('/check', status, err.toString());
        console.error(this.state.data);
      }.bind(this)
    });
  },

  submit: function(e) {
    e.preventDefault()

    if(this.state.signedIn != true) {
      var tostMessage = "You must be signed in to send a tweet."
      this.toast(tostMessage)
    } else {

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
        }.bind(this),
        error: function(xhr, status, err) {
          this.clearForm()
          this.toast("Tweet Sent!")
          console.error('/tweets', status, err.toString());
          console.error(this.state.message);
        }.bind(this)
      });
    }
  },

  toast: function(message) {
    Materialize.toast('<span>' + message + '</span>', 3500)
  },

  clearForm: function() {
    this.setState({
      message: this.props.subject + "#polisee.io "
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
