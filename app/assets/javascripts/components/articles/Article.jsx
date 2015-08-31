var Article = React.createClass({
  toggleContent: function() {
    this.props.toggleOne(this.props.key)
  },

  getHeight: function() {
    if(this.props.open) {
      return "30px"
    } else {
      return "0"
    }
  },

  render: function() {
    var style = { height: this.getHeight() }
    return (
      <li>
         <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
          <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
      </li>
    );
  }
});
