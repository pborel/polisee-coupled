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
      <div className={"article" + this.props.key}>
        <p className="articleTitle" onClick={this.toggleContent} >{this.props.data.short_title}</p>
        <p className="articleContent" style={style} >asadfasdfadsfasdf</p>
      </div>
    );
  }
});
