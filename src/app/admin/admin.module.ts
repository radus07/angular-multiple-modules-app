import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AdminComponent, HomeComponent} from './components';

import {AdminRoutingModule} from './routing/admin-routing.module';

/**
 * This is the module for authenticated, admin users
 *
 * Import here the main and children components, and routes for this module.
 * The components will be specified in `declarations` section of @NgModule.
 * Other modules will be specified in `imports` section of @NgModule.
 * The services will be specified in `providers` section of @NgModule.
 */

@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  providers: [
  ]
})
export class AdminModule {
}
