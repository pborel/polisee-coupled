var IndexTab = React.createClass({
  handleClick: function(event) {
    var link = '/bills'
    // console.log("hitting IndexTab")
    // console.log(this.props.tab)
    this.props.parentElement.handleClick(this.props.tab, link)
  },

  render: function() {
    return(
      <li className="tab col s4">
        <a href="#" onClick={this.handleClick} className="hoverable waves-effect waves-blue btn-new">Index</a>
      </li>
    );
  }
});
