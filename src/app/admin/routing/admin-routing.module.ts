import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AdminComponent} from '../components/admin.component';
import {HomeComponent} from '../components/home/home.component';

/**
 * This is the routing module of
 *                              @see AdminModule
 *
 * The main state of this module is `admin`.
 * Add other states in `children` section of `admin` state.
 */
const routes: Routes = [
  {
    path: 'admin', component: AdminComponent,
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
export class AdminRoutingModule {
}
