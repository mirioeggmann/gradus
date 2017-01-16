import { Injectable } from '@angular/core';

import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { Subject } from "../../models/subject.model";
import {Observable} from "rxjs";
import {GlobalService} from "../../global.service";

@Injectable()
export class SubjectService {

  constructor(private http: Http, private globalService: GlobalService) {}

  private baseUrl = 'http://localhost:8080/webresources/subject';
  options = new RequestOptions(
    { headers: new Headers(
      {'Content-Type': 'application/json'})
    });


  getSubjects() {
    return this.http.get(this.baseUrl + "/" + this.globalService.signedUser.id, this.options)
      .map(res => <Subject[]> res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getSubject(id: number): Observable<Subject> {

    return this.http.get(this.baseUrl + "/one" + id, this.options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  createSubject(body: Object): Observable<Subject> {
    let options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})});

    return this.http.post(this.baseUrl + "/create", body, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteSubject(body: Object): Observable<Object> {
    let options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})});

    return this.http.post(this.baseUrl + "/delete", body, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
