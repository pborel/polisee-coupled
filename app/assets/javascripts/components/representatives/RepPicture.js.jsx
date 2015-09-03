var RepPicture = React.createClass({
	render: function() {
		return (
		<div className="card-image waves-effect waves-block waves-light responsive-img">
			<img src={this.props.url} alt=" "  className="rep-image activator" />
		</div>
		)
	}
})
