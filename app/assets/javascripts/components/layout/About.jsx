var About = React.createClass({
  render: function() {
    return (
      <div id="about-view">
        <h1>About</h1>
        <p>An example of a stateless Ruby API using the rails-api gem, with a React client side app. To fit the definition of stateless, the API does not include action-view, sprockets, or sessions. Roughly speaking, React replaces action-view, Webpack replaces sprockets, and JWT replaces sessions.</p>
      </div>
    );
  }
});
