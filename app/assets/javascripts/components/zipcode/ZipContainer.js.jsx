var RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;

var ZipContainer = React.createClass({


  submitZipToServer: function (event) {
    event.preventDefault()
  	var zipCode = React.findDOMNode(this.refs.zipcode).value
  	this.props.handleSubmit(zipCode)
  },

  render: function(){

    return (
		<form onSubmit={this.submitZipToServer}>
    		<div className="input-field" >
      			<input id="search" type="search" placeholder = "ZIP e.g. 90210" ref="zipcode"/>
      			<label for="search"><i className="material-icons">search</i></label>
    		</div>
  		</form>
    )
  }
})
