var FooterLinks = React.createClass({
  render: function(){
    return (
      <div className="col l4 offset-l2 s12">
        <h5 className="white-text">Links</h5>
          <ul>
            <LinkItem />
            <LinkItem />
            <LinkItem />
          </ul>
      </div>
    )
  }
})
