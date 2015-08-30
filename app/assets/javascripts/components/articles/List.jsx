var List = React.createClass({
  render: function() {

    var articleNodes = this.props.data.map(function(article) {
      var link = article.last_version.urls.html
      return (
        <Article key={article.bill_id}>
          <a href={link}>{article.short_title}</a>
          <span> -- <a href="#">followButton</a> </span>
        </Article>
        )
    });

    return (
      <div className="debugger articles-list">
       {articleNodes}
      </div>
      );
  }
});
          // <a href={link}>{article.short_title}</a>
