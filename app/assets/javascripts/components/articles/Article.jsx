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
      <div className={"section" + this.props.key}>
        <h2 className="sectionTitle">{this.props.data.short_title}</h2>
        <p className="sectionContent">{this.props.data.official_title}</p>
      </div>
    )
  }
});
