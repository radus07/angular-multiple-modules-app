import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {UserComponent} from './components/user.component';
import {HomeComponent} from './components/home/home.component';

import {UserRoutingModule} from './routing/user-routing.module';

@NgModule({
  declarations: [
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  providers: [
  ]
})
export class UserModule {
}
