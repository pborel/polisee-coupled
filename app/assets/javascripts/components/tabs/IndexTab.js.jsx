var IndexTab = React.createClass({
  handleClick: function(event) {
    // console.log("hitting IndexTab")
    // console.log(this.props.tab)
    this.props.parentElement.handleClick(this.props.tab)
  },

  render: function() {
    return(
      <li className="tab col s4">
        <a href="#" onClick={this.handleClick} className="waves-effect waves-red btn-flat btn">Index</a>
      </li>
    );
  }
});
