var Article = React.createClass({
  handleClick: function(){
    if(this.state.open) {
      this.setState({
        open: false,
        class: "section"
      });
    }else{
      this.setState({
        open: true,
        class: "section open"
      });
    }
  },
  getInitialState: function(){
     return {
       open: false,
       class: "section"
     }
  },

  render: function() {
    return (
      <li>
        <div className="collapsible-header">{this.props.data.short_title}</div>
        <div className="collapsible-body"><p><a href="#">{this.props.children}</a></p></div>
      </li>
    )
  }
});
