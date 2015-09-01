var Route = ReactRouter.Route,
    DefaultRoute = ReactRouter.DefaultRoute;

this.AppRoutes = (
  <Route name='app' path='/' handler={App}>
    <Route name='about' handler={About} path='/about' />
    <Route name='team' handler={TeamContainer} path='/team' />
  </Route>
);
    // <Route name='bills' handler={ArticleContainer} path='/bills' />
    // <Route name='representatives' handler={RepresentativeContainer} path='/legislators' />
