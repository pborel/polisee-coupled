var Route = ReactRouter.Route,
    Link = ReactRouter.Link;
    // DefaultRoute = ReactRouter.DefaultRoute;

this.AppRoutes = (
  <Route name='app' handler={App}>
    <Route name='home' path='/' handler={Home} />

    <Route name='team' path='/team' handler={TeamContainer} />
    <Route name='tour' path='/tour' handler={TourContainer} />

  </Route>
);
    // <Link name='about' handler={About} />
    // <Route name='bills' handler={ArticleContainer} path='/bills' />
    // <Route name='representatives' handler={RepresentativeContainer} path='/legislators' />
    // <DefaultRoute handler={Home} />
