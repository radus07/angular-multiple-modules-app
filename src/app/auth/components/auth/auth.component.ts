import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthService} from '../../../service';

/**
 * This is the AuthComponent of
 *                             @see AuthModule
 *
 * It prompts user's credentials
 * It shows errors if something bad happens.
 */

@Component({
  selector: 'app-auth-section',
  templateUrl: './auth.component.html'
})
export class AuthComponent {

  /**
   * @this loginForm is used for building the form for login,
   * with all her fields
   */

  private loginForm: FormGroup;

  /**
   * @this authErrors is a flag used to indicate if
   * has errors after checking the user's credentials
   * @default false
   */

  private authErrors: boolean;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.loginForm = this.buildLoginForm(this.formBuilder);
    this.authErrors = false;
  }

  /**
   * @this loginUser is the method used for authentication, called by user
   * on submitting the login form
   * @param user represents the credentials entered by user
   */

  public loginUser(user: any): void {
    this.authService.checkAuthentication(user)
      .subscribe(
        userData => {
          this.authErrors = false;
          this.authService.loginUser(userData)
            .subscribe(() => {
                // depending on the user's role, navigate to corresponding module
                this.router.navigateByUrl(userData.role + '/home');
              }
            );
        },
        () => {
          // display to the user a message about this error
          this.authErrors = true;
        }
      );
  }

  /**
   * @this buildLoginForm is the method used for create the login form
   * @param {FormBuilder} formBuilder
   * @returns {FormGroup} a group of fields needed for authentication
   */

  private buildLoginForm(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      'username': [],
      'password': []
    });
  }

}
