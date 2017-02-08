import {Component, Injectable,Input,Output,EventEmitter} from '@angular/core'
import {User} from "./models/user.model";

@Injectable()
export class GlobalService {
  @Output() fire: EventEmitter<any> = new EventEmitter();

  private _signedIn: boolean = false;
  private _signedUser: User;

  constructor() { }


  get signedIn(): boolean {
    return this._signedIn;
  }

  set signedIn(value: boolean) {
    this._signedIn = value;
  }

  get signedUser(): User {
    return this._signedUser;
  }

  set signedUser(value: User) {
    this._signedUser = value;
  }
}
