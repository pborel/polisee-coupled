var RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;

var ZipContainer = React.createClass({
  render: function(){
    return (
		<form>
    		<div className="input-field">
      			<input id="search" type="search" placeholder = "zipjawn"/>
      			<label for="search"><i className="material-icons">search</i></label>
    		</div>
  		</form>
    )
  }
})
