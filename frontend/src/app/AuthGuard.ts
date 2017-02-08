import {Injectable} from "@angular/core";
import {CanActivate} from "@angular/router";
import {GlobalService} from "./shared/global.service";


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private globalService : GlobalService){}

  canActivate() {
    return this.globalService.signedIn;
  }
}
