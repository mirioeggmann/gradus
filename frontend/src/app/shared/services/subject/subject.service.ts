import { Injectable } from '@angular/core';

import {Http, Response} from "@angular/http";
import { Subject } from "../../models/subject.model";
import {Observable} from "rxjs";

@Injectable()
export class SubjectService {

  constructor(private http: Http) { }

  private baseUrl = 'http://localhost:8080/webresources/subject';  // URL to web api

  getSubjects() {
    return this.http.get(this.baseUrl)
      .map(res => <Subject[]> res.json())
      .catch(this.handleError);
  }

  private handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.log(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
