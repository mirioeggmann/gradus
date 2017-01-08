import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Semester} from "../../models/semester.model";

@Injectable()
export class SemesterService {

  constructor(private http: Http) {}

  private baseUrl = 'http://localhost:8080/webresources/semester';

  getSemesters() {
    return this.http.get(this.baseUrl)
      .map(res => <Semester[]> res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getSemester(id: number): Observable<Semester> {
    let options = new RequestOptions(
      { headers: new Headers(
        {'Content-Type': 'application/json'})
      });

    return this.http.get(this.baseUrl + "/" + id, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  createSemester(body: Object): Observable<Semester> {
    let options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})});

    return this.http.post(this.baseUrl + "/create", body, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
