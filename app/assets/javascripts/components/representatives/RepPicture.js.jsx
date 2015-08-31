var RepPicture = React.createClass({
	render: function() {
		return (
		<div className="card-image waves-effect waves-block waves-light">
			<img className="rep-image activator" src={this.props.url} />
		</div>
		)
	}
})