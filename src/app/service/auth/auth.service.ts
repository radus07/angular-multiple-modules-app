import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
// import the list of users
import {USERS} from '../constants/users.const';

/**
 * This is the AuthService
 *
 * It provides a list of methods required for passing authentication
 */

@Injectable()
export class AuthService {

  constructor() {
  }

  /**
   * @this checkAuthentication is the method used for checking if user's credentials are valid
   * @param user is credentials entered by user
   * @returns {Observable<any>} if the user's credentials are valid, return all info about it,
   * else return error
   */

  public checkAuthentication (user: any): Observable<any> {
    const userFound = USERS.find(item => item.username === user.username && item.password === user.password);
    return new Observable (observer => {
      if (userFound !== undefined) {
        observer.next(userFound);
      } else {
        observer.error();
      }
    });
  }

  /**
   * @this loginUser is the method used to save user's info
   * @param user contains all info about user
   * @returns {Observable<any>} true if info was saved successfully
   */

  public loginUser (user: any): Observable<any> {
    return new Observable(observer => {
      localStorage.setItem('user', JSON.stringify(user));
      observer.next();
    });
  }

}
