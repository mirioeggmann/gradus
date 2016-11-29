import { Component, OnInit } from '@angular/core';
import {User} from "../shared/models/user.model";
import {USER} from "../shared/services/user/mock.user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login';
  user : User;

  constructor() { }

  ngOnInit() {
    this.user = USER;
    this.user.firstname = "";
    this.user.lastname = "";
    this.user.email = "";
    this.user.password = "";
  }

}
