var SearchFilter = React.createClass({

  render: function(){
    return (
      <form>
          <div className="input-field">
            <input id="search" type="search" placeholder="Search"/>
            <label forName="search"><i className="material-icons">email</i></label>
          </div>
      </form>
    )
  }
});
