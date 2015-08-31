var Article = React.createClass({
  getInitialState: function(articleList){
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
         <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
          <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
      </li>
      // <div className={"article" + this.props.key}>
      //   <p className="articleTitle" onClick={this.toggleContent}>{this.props.data.short_title}</p>
      //   { this.state.showContent ? <Content data={this.props.data} /> : null }
      // </div>

    );
  }
});
