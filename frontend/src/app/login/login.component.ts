import { Component, OnInit } from '@angular/core';
import {User} from "../shared/models/user.model";
import {UserService} from "../shared/services/user/user.service";
import {GlobalService} from "../shared/global.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService : UserService, private globalService : GlobalService, private router : Router) {
    this.user = new User();
  }

  title = 'Login';
  user : User;
  errors : string[];

  submitUser(){

    this.userService
      .signIn(this.user).subscribe(
      response => {
        if (response["errors"].length == 0) {
          this.globalService.signedIn = true;
          this.userService.getUser(+response["message"]).subscribe(
            response => {
              this.globalService.signedUser = response;
              this.router.navigateByUrl("/dashboard");
            },
            err => {
              console.log(err);
            }
          );
        } else {
          this.errors = response["errors"];
        }
      },
      err => {
        console.log(err);
      });
  }

  ngOnInit() {
  }

}
