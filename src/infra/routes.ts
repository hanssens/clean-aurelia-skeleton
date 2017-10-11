/* tslint:disable:max-line-length */
/* tslint:disable:object-literal-sort-keys */

import { RouteConfig } from 'aurelia-router';

/**
 * Abstracted the application routes, used in App.ts, to a seperate file.
 */
export class Routes {
    public static maps(): RouteConfig[] {
        return [
            // home/root
            { route: ['', 'home'], name: 'home', moduleId: './views/home/home', nav: true, title: 'Dashboard' }
        ] as RouteConfig[];
    }
}
