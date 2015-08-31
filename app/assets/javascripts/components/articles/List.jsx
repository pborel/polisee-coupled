var List = React.createClass({
  // getInitialState: function() {
  //   return {
  //     text: 'this is the state'
  //   }
  // },

  buildArticles: function(articleList){
    var articleNodes = articleList.map(function(article, index) {
      var link = article.last_version.urls.html
      return (
        <Article key={index} data={article}>
          <a href={link}>{article.short_title}</a>
          <span> -- <a href="#">followButton</a> </span>
        </Article>
        )
      return articleNodes;
    },

    render: function() {
      var articleNodes = this.buildArticles(this.props.data)
      return (
        <div className="container">
            {articleNodes}
        </div>
      );
  }
});
