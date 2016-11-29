import {Injectable} from "@angular/core";
import {USER} from "./mock.user";


@Injectable()
export class MockUserService {

  getUser() {
    return Promise.resolve(USER);
  }
}
