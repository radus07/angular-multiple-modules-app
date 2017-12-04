import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthComponent} from '../components/auth.component';

/**
 * This is the routing module of
 *                              @see AuthModule
 *
 * The main state of this module is `auth`.
 */
const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  /**
   * @property data.authenticated specifies if an user must be authenticated
   *                                                        (true: authenticated, false: unauthenticated).
   */
  {path: 'auth', component: AuthComponent, data: {authenticated: false}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
