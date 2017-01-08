import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Grade} from "../../models/grade.model";

@Injectable()
export class GradeService {

  constructor(private http: Http) {}

  private baseUrl = 'http://localhost:8080/webresources/grade';

  getGrades() {
    return this.http.get(this.baseUrl)
      .map(res => <Grade[]> res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getGrade(id: number): Observable<Grade> {
    let options = new RequestOptions(
      { headers: new Headers(
        {'Content-Type': 'application/json'})
      });

    return this.http.get(this.baseUrl + "/" + id, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  createGrade(body: Object): Observable<Grade> {
    let options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})});

    return this.http.post(this.baseUrl + "/create", body, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
