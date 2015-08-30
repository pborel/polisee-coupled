var List = React.createClass({
  render: function() {

    var articleNodes = this.props.data.map(function(article) {
      return (
        <Article key={article.bill_id}>
          <span> This is article number {article.bill_id} <a href="#">followButton</a> </span>
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
      // var link = article.last_version.urls.html
          // <a href={link}>{article.short_title}</a>
