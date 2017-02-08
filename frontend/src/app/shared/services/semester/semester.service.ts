import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Semester} from "../../models/semester.model";
import {GlobalService} from "../../global.service";

@Injectable()
export class SemesterService {

  constructor(private http: Http, private globalService: GlobalService) {}

  private baseUrl = 'http://localhost:8080/webresources/semester';
  options = new RequestOptions(
    { headers: new Headers(
      {'Content-Type': 'application/json'})
    });


  getSemesters() {
    return this.http.get(this.baseUrl + "/" + this.globalService.signedUser.id, this.options)
      .map(res => <Semester[]> res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getSemester(id: number): Observable<Semester> {

    return this.http.get(this.baseUrl + "/one" + id, this.options)
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
