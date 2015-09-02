var RouteHandler = ReactRouter.RouteHandler,
    Link = ReactRouter.Link;

var FooterContainer = React.createClass({
  render: function(){
    return (
    <div className='footer-page cyan darken-1'>
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
