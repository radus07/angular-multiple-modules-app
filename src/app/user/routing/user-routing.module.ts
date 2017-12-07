import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent, UserComponent} from '../components';

/**
 * This is the routing module of
 *                              @see UserModule
 *
 * The main state of this module is `user`.
 * Add other states in `children` section of `user` state.
 */
const routes: Routes = [
  {
    path: 'user', component: UserComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      /**
       * @property data.authenticated specifies if an user must be authenticated
       *                                                        (true: authenticated, false: unauthenticated).
       * @property data.roles specifies which roles an user need to have.
       */
      {path: 'home', component: HomeComponent, data: {authenticated: true, roles: []}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
