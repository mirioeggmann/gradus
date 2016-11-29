import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {User} from "../../models/user.model";
import 'rxjs/Rx';

@Injectable()
export class UserService {

  constructor (private http: Http) {}

  private _davisUrl = 'http://localhost:8080/webresources/user';  // URL to web api
  getUser() {
    return this.http.get(this._davisUrl)
      .map(res => <User> res.json())
      .catch(this.handleError);
  }
  private handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.log(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
