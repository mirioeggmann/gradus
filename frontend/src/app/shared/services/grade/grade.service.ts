import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Grade} from "../../models/grade.model";
import {GlobalService} from "../../global.service";

@Injectable()
export class GradeService {

  constructor(private http: Http, private globalService : GlobalService) {}

  private baseUrl = 'http://localhost:8080/webresources/grade';
  defaultHeader = new RequestOptions(
    { headers: new Headers(
      {'Content-Type': 'application/json'})
    });

  getGrades() {
    return this.http.get(this.baseUrl + "/" + this.globalService.signedUser.id, this.defaultHeader)
      .map(res => <Grade[]> res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getGrade(id: number): Observable<Grade> {

    return this.http.get(this.baseUrl + "/one" + id, this.defaultHeader)
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
