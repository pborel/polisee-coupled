var IndexTab = React.createClass({

    render: function(){
      return(
        <li className="tab col s4">
          <a href="#" onClick={this.toggleDisable} className="waves-effect waves-red btn-flat btn">Upcoming</a>
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
