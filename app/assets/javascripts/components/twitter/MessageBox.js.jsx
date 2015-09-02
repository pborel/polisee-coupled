var MessageBox = React.createClass({
  render: function() {
    return (
      <input id="tweet" type="text" length="144" name="message" onChange={this.props.valChange} value={ this.props.val} />
    );
  }
})
