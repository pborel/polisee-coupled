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
        <div className="debugger collapsible-header" onClick={this.toggleContent}>
          {this.props.data.short_title ? this.props.data.short_title : this.props.data.official_title}  
          <Favorite />
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
