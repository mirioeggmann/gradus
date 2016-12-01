import { Component, OnInit } from '@angular/core';
import {User} from "../shared/models/user.model";
import {USER} from "../shared/services/user/mock.user";
import {UserService} from "../shared/services/user/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService : UserService) {
    this.user = new User();
  }

  title = 'Login';
  user : User;

  submitUser(){

    this.userService
      .signIn(this.user).subscribe(
      response => {
        console.log(response);
      },
      err => {
        console.log(err);
      });
  }

  ngOnInit() {
  }

}
