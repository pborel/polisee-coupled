var UpcomingTab = React.createClass({
    handleClick: function() {
        console.log("updating view")
    },

    render: function(){
      return(
        <li className="tab col s4">
          <a href="#" onClick={this.handleClick} className="waves-effect waves-red btn-flat btn">Upcoming</a>
        </li>
      );
    }
});
    // getInitialState: function(){
    //   return { disableButton: false }
    // },

    // toggleDisable: function(){
    //   console.log("do shit")
    //   if(this.state.disableButton != true) {
    //     this.setState({ disableButton: true })
    //     var
    //   } else {
    //     this.setState({ disableButton: false })
    //   }

    // },
