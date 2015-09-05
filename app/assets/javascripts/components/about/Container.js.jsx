var TeamContainer = React.createClass({
  render: function() {
    return (
      <div className="team-container">
        <TeamDescription />
        <hr/>
        <br/>
        <Iframe width="720" height="480" src="https://prezi.com/embed/fc5lqgsoy6gp/?bgcolor=ffffff&amp;lock_to_path=0&amp;autoplay=0&amp;autohide_ctrls=0&amp;landing_data=bHVZS2czc0xSTEVQbHBUdWQvM2NjZDI2alQ2V21UL1Y&amp;landing_sign=FSMm3QKlit1TWqO6RovWGiNi9NHYU5cMtFo-VFOHOso" />
        <br/>
        <Iframe width="720" height="480" src="https://www.youtube.com/embed/uTmskGjgmDA?start=2604s" />
        <br/>
        <hr/>
        <TeamBox url="/teams" />
      </div>
    )
  }
});
