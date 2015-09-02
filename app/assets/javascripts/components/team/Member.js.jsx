var Member = React.createClass({
  render: function() {
    return (
      <div className="card rep-card hoverable left-align">
        <TeamPicture url={this.props.data.image_url} />
        <TeamName url={this.props.data.website_url} name={this.props.data.name} />
        <TeamButtonSpace data={this.props.data} />
        <TeamBio data={this.props.data} />
      </div>
    );
  }
});
