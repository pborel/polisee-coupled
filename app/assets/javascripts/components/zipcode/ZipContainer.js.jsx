var RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;

var ZipContainer = React.createClass({
  getInitialState: function() {

    return {
      data: []
    };
  },

  // loadZipFromServer: function() {
  //   $.ajax({
  //     data: { zip: zip },
  //     url: "http://localhost:3000/legislators",
  //     dataType: 'json',
  //     cache: false,
  //     success: function(data) {
  //       this.setState({data: data});
  //     }.bind(this),
  //     error: function(xhr, status, err) {
  //       console.error(this.props.url, status, err.toString());
  //       console.error(this.state.data);
  //     }.bind(this)
  //   });
  // },

  submitZipToServer: function (event) {
  	debugger
  	event.preventDefault()

  
  },


  	// $.ajax({
   //    data: { zip: zip },
   //    url: "http://localhost:3000/legislators",
   //    dataType: 'json',
   //    cache: false,
   //    success: function(data) {
   //      this.setState({data: data});
   //    }.bind(this),
   //    error: function(xhr, status, err) {
   //      console.error(this.props.url, status, err.toString());
   //      console.error(this.state.data);
   //    }.bind(this)
   //  });



  // componentDidMount: function() {
  //   var tab = "index"
  //   this.loadZipFromServer();
  // },
  render: function(){


    return (
		<form onSubmit={this.submitZipToServer}>
    		<div className="input-field" >
      			<input id="search" type="search" placeholder = "zipjawn" ref="zipcode"/>
      			<label for="search"><i className="material-icons">search</i></label>
    		</div>
  		</form>
    )
  }
})
