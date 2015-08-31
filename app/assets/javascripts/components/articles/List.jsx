var List = React.createClass({
  getInitialState: function(articleList){
    return { openArticleIndex: -1 }
  },

  buildArticles: function(articleList){
    var articleNodes = articleList.map(this.buildArticle)
    return articleNodes;
  },

  buildArticle: function(article, index){
    var openStatus = (index === this.state.openArticleIndex);
    return <Article key={index} data={article} toggleOne={this.toggleOne} open={openStatus} />
  },

  toggleOne: function(id) {
    if(this.state.openArticleIndex === id) {
      this.setState({openArticleIndex: -1});
    } else {
      this.setState({openArticleIndex: id});
    }
  },

  render: function() {
    var articleNodes = this.buildArticles(this.props.data)
    return (
      <div className="container articles-list">
          {articleNodes}
      </div>
    );
  }
});
    // var link = article.last_version.urls.html
// <a href="#">{article.short_title}</a>
//         <span> -- <a href="#">followButton</a> </span>