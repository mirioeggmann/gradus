import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {User} from "../../models/user.model";


// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  private baseUrl = 'http://localhost:8080/webresources/user';  // URL to web api


  getUsers() {
    return this.http.get(this.baseUrl)
      .map(res => <User[]> res.json())
      .catch(this.handleError);
  }

  getUser(id: number): Observable<User> {
    let options = new RequestOptions(
      { headers: new Headers(
        {'Content-Type': 'application/json'})
      });

    return this.http.get(this.baseUrl + "/" + id, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


  addUser(body: Object): Observable<User> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
    let options = new RequestOptions({headers: headers}); // Create a request option

    return this.http.post(this.baseUrl + "/create", body, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }


  signIn(body: Object): Observable<Object> {
    let bodyString = JSON.stringify(body);
    let options = new RequestOptions(
      { headers: new Headers(
        {'Content-Type': 'application/json'})
      });

    return this.http.post(this.baseUrl + "/signin", body, options)
      .map((res: Response) => res.json()) //
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
