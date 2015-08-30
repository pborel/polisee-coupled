var RepresentativeContainer = React.createClass({
  render: function() {
    return (
      <div>
        <RepresentativeBox url={this.props.url} />
      </div>
    )
  }
});

var RepresentativeBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  loadRepresentativesFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.loadRepresentativesFromServer();
  },

  render: function() {
    return (
      <RepresentativesList data={this.state.data} />
    )
  }
});

var RepresentativesList = React.createClass({
  render: function() {
    var representativeNodes = this.props.data.map(function(representative) {
      var handle = "https://twitter.com/" + representative.twitter_id
      return (
        <Representative key={representative.id}>
          <img className="rep-image" src={representative.image} />
          <a href="#">{representative.first_name} {representative.last_name}</a>
          <span> -- <a href={handle}>{representative.twitter_id}</a></span>
        </Representative>
        )
    });

    return (
      <span>
        {representativeNodes}
      </span>
    );
  }
});

var Representative = React.createClass({
  render: function() {
    return (
      <span>
        {this.props.children}
      </span>
    )
  }
});
