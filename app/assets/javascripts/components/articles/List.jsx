var ArticleList = React.createClass({
  buildArticles: function(articleList) {
    var articleNodes = articleList.map(this.buildArticle)
    return articleNodes;
  },

  buildArticle: function(article) {
    if (this.props.following === true) {
      return <Article data={article} favoritesUrl={this.props.favoritesUrl} favoriteStatus={this.props.following}/>
    }
    else {
      return <Article data={article} favoritesUrl={this.props.favoritesUrl} favoriteStatus={this.props.following}/>
    }
  },

  render: function() {
    var articleNodes = this.buildArticles(this.props.data)
    return (
      <div className="articles-list full-list-shadow" >
        <ul className= "collapsible hoverable collection list-shadow">
           {articleNodes}
        </ul>
      </div>
    );
  }
});
    // var link = article.last_version.urls.html
// <a href="#">{article.short_title}</a>
//         <span> -- <a href="#">followButton</a> </span>
// key={index}
