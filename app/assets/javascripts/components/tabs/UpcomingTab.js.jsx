var UpcomingTab = React.createClass({
    handleClick: function() {
      var link = '/bills'
      // console.log("hitting UpcomingTab")
      // console.log(this.props.tab)
      this.props.parentElement.handleClick(this.props.tab, link)
    },

    render: function() {
      return(
        <li className="tab col s4">
          <a href="#" onClick={this.handleClick} className="waves-effect waves-red btn-flat ">Upcoming</a>
        </li>
      );
    }
});
