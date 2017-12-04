import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';

import {AuthModule} from './auth/auth.module';
import {UserModule} from './user/user.module';
import {AdminModule} from './admin/admin.module';

/**
 * This is the main module of application
 *
 * Import here the main component and other modules
 */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    AdminModule,
    AuthModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
