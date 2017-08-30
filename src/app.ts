import { autoinject } from 'aurelia-dependency-injection';
import { Router, RouterConfiguration } from 'aurelia-router';
import { Routes } from './infra/routes';

@autoinject
export class App {
  constructor(private router: Router) {
  }

  private configureRouter(config: RouterConfiguration, router: Router): void {
    config.title = 'Clean Aurelia App';
    config.map(Routes.maps());

    this.router = router;
  }
}
