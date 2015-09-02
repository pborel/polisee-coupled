var TeamContainer = React.createClass({
  render: function() {
    return (
      <div className="team-container">
        <TeamDescription />
        <hr/>
        <TeamBox url="/teams" />
      </div>
    )
  }
});

