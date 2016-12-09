import { Component, OnInit } from '@angular/core';
import {User} from "../shared/models/user.model";
import {UserService} from "../shared/services/user/user.service";
import {GlobalService} from "../shared/global.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _UserService : UserService, private globalService : GlobalService) { }

  errorMessage: string;
  user : User = new User();

  editingOptions = {
    editIcon: "edit",
    submitIcon: "done",
    isEditing: false,
  };

  subjects = [
    { name: "Mathematik" },
    { name: "Deutsch" },
    { name: "Englisch" },
    { name: "M306" },
    { name: "M946" },
    { name: "M947" },
  ];


  changeEditState() {
    if (!this.editingOptions.isEditing) {}
    this.editingOptions.isEditing = !this.editingOptions.isEditing;
  }


  getUser() {
    this._UserService.getUser(this.globalService.userID).subscribe(
      user => this.user = user);
  }

  getUsers(){
    this._UserService.getUsers().subscribe(
      // users => this.users = users,
      error =>  this.errorMessage = <any>error);
  };

  ngOnInit() {
    this.getUser();
  }

}
