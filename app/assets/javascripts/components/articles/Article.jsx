var Article = React.createClass({
  getInitialState: function() {
    return { showContent: false }
  },

  toggleContent: function() {
    console.log("showing content")
    if(this.state.showContent != true) {
      this.setState({ showContent: true })
    } else {
      this.setState({ showContent: false })
    }
  },

  render: function() {
    return (
      <li>
        <div className="collapsible-header" onClick={this.toggleContent}>
          {this.props.data.short_title}
        </div>
        { this.state.showContent ? <Content data={this.props.data} /> : null }
      </li>
    );
  }
});
        // <Content />
      // <div className={"article" + this.props.key}>
      //   <p className="articleTitle" onClick={this.toggleContent}>{this.props.data.short_title}</p>
      // </div>
