import {Component} from '@angular/core';

/**
 * This is the main component of
 *                              @see UserModule
 *
 * In this `template` will be loaded all components from this module.
 */

@Component({
  selector: 'app-user-section',
  template: `
    <router-outlet></router-outlet>
  `
})
export class UserComponent {
}
