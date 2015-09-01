String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var RepBio = React.createClass({
	render: function(){

    //js logic for incomplete information
		var party
		var partyImage
			if (this.props.data.party == "D"){
				party = "Democrat"
				partyImage = "https://upload.wikimedia.org/wikipedia/en/e/ee/Democratslogo.svg"
			}
			else if (this.props.data.party == "R") {
				party = "Republican"
				partImage = "https://upload.wikimedia.org/wikipedia/commons/9/9b/Republicanlogo.svg"
			} else {
				party = "Unaffiliated"
			}

    var district
      if (this.props.data.district == ""){
        district = "Not Available"
      } else {
        district = this.props.data.district
      }
		return (
			<div className="card-reveal">
			      <span className="card-title grey-text text-darken-4">{this.props.data.title}. {this.props.data.first_name} {this.props.data.last_name} <i className="material-icons right">close</i></span>
			      <p>
						Party: {party} <br/>
						State: {this.props.data.state_name} <br/>
						Chamber: {this.props.data.chamber.capitalizeFirstLetter()} <br/>
						Term Start: {this.props.data.term_start} <br/>
						Term End: {this.props.data.term_end} <br/>
						{this.props.data.district ? "District: " + this.props.data.district : null}
				  </p>
			 </div>
		)
	}
})

