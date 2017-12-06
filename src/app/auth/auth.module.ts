import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AuthComponent} from './components';

import {AuthRoutingModule} from './routing/auth-routing.module';

import {AuthService} from '../service';

/**
 * This is the module for authentication
 *
 * Import here the main and children components, and routes for this module.
 * The components will be specified in `declarations` section of @NgModule.
 * Other modules will be specified in `imports` section of @NgModule.
 * The services will be specified in `providers` section of @NgModule.
 */

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule {
}
