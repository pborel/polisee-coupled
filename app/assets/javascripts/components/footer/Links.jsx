var FooterLinks = React.createClass({
  render: function() {
    return (
      <div className="col l4 offset-l2 s12">
        <h5 className="white-text">Links</h5>
          <ul>
            <TeamLink />
            <a className="white-text text-lighten-3" href="https://github.com/pborel/polisee-coupled">Github</a> <br/>
          </ul>
      </div>
    )
  }
})
            // <a className="white-text text-lighten-3" href="/tour">Take the Tour</a>
