import {Component} from '@angular/core';

/**
 * This is the main component of application
 *
 * In this `template` will be loaded the rest of components from other modules.
 */

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
