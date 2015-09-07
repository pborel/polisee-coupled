var Route = ReactRouter.Route,
    Link = ReactRouter.Link;
    // DefaultRoute = ReactRouter.DefaultRoute;

this.AppRoutes = (
  <Route name='app' handler={App}>
    <Route name='home' path='/' handler={Home} />
    <Route name='about' path='/about' handler={TeamContainer} />
  </Route>
);
    // <Link name='about' handler={About} />
    // <Route name='bills' handler={ArticleContainer} path='/bills' />
    // <Route name='tour' handler={TourContainer} />
    // <Route name='representatives' handler={RepresentativeContainer} path='/legislators' />
    // <DefaultRoute handler={Home} />
