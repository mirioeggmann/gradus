import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import {GlobalService} from "../global.service";
import {Observable} from "rxjs";

@Injectable()
export abstract class ApiService {

  constructor(protected http: Http, protected globalService : GlobalService) {}

  baseUrl = 'http://localhost:8080/webresources/';
  defaultOptions = new RequestOptions({ headers: new Headers({'Content-Type': 'application/json'})});

  handleError(error: any) {
    // Observable.throw(error.json().error || 'Server error');
    // Observable.throw('Server error');
  }

}
