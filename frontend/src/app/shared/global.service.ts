import {Component, Injectable,Input,Output,EventEmitter} from '@angular/core'

@Injectable()
export class GlobalService {
  @Output() fire: EventEmitter<any> = new EventEmitter();

  private _signedIn: boolean = false;
  private _userID: number;

  constructor() { }


  get signedIn(): boolean {
    return this._signedIn;
  }

  set signedIn(value: boolean) {
    this._signedIn = value;
  }

  get userID(): number {
    return this._userID;
  }

  set userID(value: number) {
    this._userID = value;
  }
}
