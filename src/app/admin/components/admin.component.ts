import {Component} from '@angular/core';

/**
 * This is the main component of
 *                              @see AdminModule
 *
 * In this `template` will be loaded all components from this module.
 */

@Component({
  selector: 'app-admin-section',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AdminComponent {
}
