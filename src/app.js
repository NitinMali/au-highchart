export class App {
  constructor() {
  }

  configureRouter(config, router) {
    config.title = 'PFI';
    config.map([
      { route: ['bar'], name: 'bar', moduleId: 'views/layout', title: 'Bar' },
      { route: ['pie'], name: 'pie', moduleId: 'views/layout', title: 'Pie' },
      { route: ['trend'], name: 'trend', moduleId: 'views/layout', title: 'Trend' },
      { route: [''], name: 'default', moduleId: 'views/layout', title: 'Home' }
    ]);

    this.router = router;
  }
}
