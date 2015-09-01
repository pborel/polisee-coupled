var FollowingTab = React.createClass({
    handleClick: function() {
        // console.log("hitting FollowingTab")
        // console.log(this.props.tab)
        this.props.parentElement.handleClick(this.props.tab)
    },

    render: function(){
      return(
        <li className="tab col s4">
          <a href="#" onClick={this.handleClick} className="waves-effect waves-red btn-flat btn">Following</a>
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
