import { Component, OnInit } from '@angular/core';
import {User} from "../shared/models/user.model";
import {UserService} from "../shared/services/user/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ UserService ]
})
export class ProfileComponent implements OnInit {

  constructor(private _UserService : UserService) { }

  errorMessage: string;
  user : User;

  getUser(){
    this._UserService.getUser().subscribe(
      user => this.user = user,
      error =>  this.errorMessage = <any>error);
  };

  ngOnInit() {
    this.getUser();
  }

}
