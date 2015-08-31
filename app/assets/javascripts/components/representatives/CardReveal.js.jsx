var CardReveal = React.createClass( {
	render: function() {
		return (
			<div className="card-reveal">
			      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
			      <p>
			      // 	Name: {this.props.data.first_name} {this.props.data.last_name} <br/>
			      // 	Party: {party} <br/>
			      // 	State: {this.props.data.state_name} <br/>
			      // 	Chamber: {this.props.data.chamber.capitalizeFirstLetter()} <br/>
			      // 	Term Start: {this.props.data.term_start} <br/>
			      // 	Term End: {this.props.data.term_end} <br/>
			      // 	District: {this.props.data.district}
			      </p>
			</div>)
	}
})
