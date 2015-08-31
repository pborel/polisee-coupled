var List = React.createClass({
  getInitialState: function(articleList){
    return { }
  },

  buildArticles: function(articleList){
    var articleNodes = articleList.map(this.buildArticle)
    return articleNodes;
  },

  buildArticle: function(article, index){
    // var openStatus = (index === this.state.openArticleIndex);
    return <Article key={index} data={article} toggleOne={this.toggleOne} />
  },

  // toggleOne: function(id) {
  //   if(this.state.openArticleIndex === id) {
  //     console.log("closing")
  //     this.setState({val: this.state.val + 1});
  //   } else {
  //     console.log("opening")
  //     this.setState({val: this.state.val + 2});
  //   }
  // },

  render: function() {
    var articleNodes = this.buildArticles(this.props.data)
    return (
      <ul class="collapsible" data-collapsible="accordion">
          {articleNodes}
      </ul>
    );
  }
});
    // var link = article.last_version.urls.html
// <a href="#">{article.short_title}</a>
//         <span> -- <a href="#">followButton</a> </span>
