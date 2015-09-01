var Route = ReactRouter.Route,
    DefaultRoute = ReactRouter.DefaultRoute;

this.AppRoutes = (
  <Route name='app' handler={App}>
    <Route name='home' handler={Home} path='/' />
    <Route name='about' handler={About} path='/about' />
    <Route name='team' handler={TeamContainer} path='/team' />
    <DefaultRoute handler={Home} />
  </Route>
);
    // <Route name='bills' handler={ArticleContainer} path='/bills' />
    // <Route name='representatives' handler={RepresentativeContainer} path='/legislators' />
