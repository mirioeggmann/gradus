import { Component, OnInit } from '@angular/core';
import {User} from "../shared/models/user.model";
import {UserService} from "../shared/services/user/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _UserService : UserService) { }

  errorMessage: string;
  users : User[];

  getUsers(){
    this._UserService.getUsers().subscribe(
      users => this.users = users,
      error =>  this.errorMessage = <any>error);
  };

  ngOnInit() {
    this.getUsers();
  }

}
