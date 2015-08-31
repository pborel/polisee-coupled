String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var RepBio = React.createClass({
	render: function(){
		var party
			if (this.props.data.party == "D"){
				party = "Democrat"
			}
			else if (this.props.data.party == "R") {
				party = "Republican"
			} else {
				party = "Unaffiliated"
			}
		return (
			<div className="card-reveal">
			      <span className="card-title grey-text text-darken-4">{this.props.data.first_name} {this.props.data.last_name} <i className="material-icons right">close</i></span>
			      <p>
			      		Name: {this.props.data.first_name} {this.props.data.last_name} <br/>
						Party: {party} <br/>
						State: {this.props.data.state_name} <br/>
						Chamber: {this.props.data.chamber.capitalizeFirstLetter()} <br/>
						Term Start: {this.props.data.term_start} <br/>
						Term End: {this.props.data.term_end} <br/>
						District: {this.props.data.district}
				  </p>
			 </div>
		)
	}
})
		
				
		