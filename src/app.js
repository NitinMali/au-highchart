export class App {
  constructor() {
    this.title = 'All in one controller';
  }

  configureRouter(config, router) {
    config.title = 'PFI';
    config.map([
      { route: ['', 'home'], moduleId: 'views/line', title: 'Home' }
    ]);

    this.router = router;
  }
}
