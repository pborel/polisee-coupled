var ZipContainer = React.createClass({
  submitZipToServer: function (e) {
    e.preventDefault()
  	var zipCode = React.findDOMNode(this.refs.zipcode).value
  	this.props.handleSubmit(zipCode)
  },

  render: function() {
    return (
		<form className="debugger1" onSubmit={this.submitZipToServer}>
  		<div className="debugger1 input-field" >
  			<input className="debugger1" id="search" type="search" placeholder="find by zip" ref="zipcode" />
  			<div className="center">
            <label className="debugger1 materialized-height-line" forHTML="search">
              <i className="debugger1 material-icons zip-icon-push-right valign">location_on</i>
            </label>
        </div>
  		</div>
  	</form>
    )
  }
});
