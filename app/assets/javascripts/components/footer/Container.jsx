var RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;

var FooterContainer = React.createClass({
  render: function(){
    return (
    <div className ='footer-page'>
      <div className="container">
        <div className="row">
          <FooterContent />
          <FooterLinks />
        </div>
      </div>
    </div>
    )
  }
})
