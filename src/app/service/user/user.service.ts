import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  private _isLogged: boolean;

  constructor() {
    this.isLogged = !!localStorage.getItem('user');
  }

  get getUserDetails (): Observable<any> {
    return new Observable(observer => {
      if (this.isLogged) {
        observer.next({isLogged: true, details: JSON.parse(localStorage.getItem('user'))});
      } else {
        observer.next({isLogged: false});
      }
    });
  }

  get isLogged(): boolean {
    return this._isLogged;
  }

  set isLogged(value: boolean) {
    this._isLogged = value;
  }

}
