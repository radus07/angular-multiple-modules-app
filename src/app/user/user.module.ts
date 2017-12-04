import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserComponent} from './components/user.component';
import {HomeComponent} from './components/home/home.component';

import {UserRoutingModule} from './routing/user-routing.module';

/**
 * This is the module for authenticated, simple users
 *
 * Import here the main and children components, and routes for this module.
 * The components will be specified in `declarations` section of @NgModule.
 * Other modules will be specified in `imports` section of @NgModule.
 * The services will be specified in `providers` section of @NgModule.
 */

@NgModule({
  declarations: [
    UserComponent,
    HomeComponent

    // Add other components
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule

    // Add other modules
  ],
  providers: [

    // Add other services
  ]
})
export class UserModule {
}
