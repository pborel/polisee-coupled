var TeamBio = React.createClass({
    render: function() {
        return (
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{this.props.data.name} <i className="material-icons right">close</i>
                </span>
                <hr/>

                <p>
                    <span className="position"><em>{this.props.data.position}</em></span><br/>
                    {this.props.data.bio}
                </p>
            </div>
        )
    }
});
