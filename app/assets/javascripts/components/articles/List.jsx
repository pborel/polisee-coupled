var List = React.createClass({
  render: function() {

    var articleNodes = this.props.data.map(function(article) {
      var link = article.last_version.urls.html
      return (
        <Article key={article.bill_id} data={article}>
          <a href={link}>{article.short_title}</a>
          <span> -- <a href="#">followButton</a> </span>
        </Article>
        )
    });

    return (
      <div className="articles-list">
        <ul className="collapsible" data-collapsible="accordion">
         {articleNodes}
        </ul>
      </div>
      );
  }
});
          // <a href={link}>{article.short_title}</a>
