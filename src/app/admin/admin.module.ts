import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AdminComponent} from './components/admin.component';
import {HomeComponent} from './components/home/home.component';

import {AdminRoutingModule} from './routing/admin-routing.module';

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
