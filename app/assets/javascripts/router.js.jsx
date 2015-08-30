var Route = ReactRouter.Route,
    DefaultRoute = ReactRouter.DefaultRoute;

this.AppRoutes = (
  <Route handler={App}>
    <Route name='bills' handler={ArticleContainer} path='/bills' />
    <Route name='representatives' handler={RepresentativeContainer} path='/legislators' />
    <Route name='about' handler={About} path='/about' />
  </Route>
);
