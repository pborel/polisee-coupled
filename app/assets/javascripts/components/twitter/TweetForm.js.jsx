var TweetForm = React.createClass({
  getInitialState: function() {
    return({ message: this.props.subject + "#polisee.io " })
  },

  submit: function(e) {
    e.preventDefault()
    if(this.props.signedIn != true) {
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
          this.toast()
          console.error('/tweets', status, err.toString());
          console.error(this.state.message);
        }.bind(this)
        // done: function(data) {
          // this.toast()
          // this.clearForm()
          // add modal here
        // }.bind(this)
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
