var MessageBox = React.createClass({
  render: function() {
    return (
      <textarea className="materialize-textarea" id="tweet" type="text" length="144" name="message" onChange={this.props.valChange} value={ this.props.val} />
    );
  }
})
