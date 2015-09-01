var List = React.createClass({
  buildArticles: function(articleList) {
    var articleNodes = articleList.map(this.buildArticle)
    return articleNodes;
  },

  buildArticle: function(article) {
    return <Article data={article} />
  },

  render: function() {
    var articleNodes = this.buildArticles(this.props.data)
    return (
      <div className="articles-list">
        <ul className="collapsible">
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
