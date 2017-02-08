import { Component, OnInit } from '@angular/core';
import {User} from "../shared/models/user.model";
import {UserService} from "../shared/services/user/user.service";
import {GlobalService} from "../shared/global.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService : UserService, private globalService : GlobalService, private router : Router) {
    this.user = new User();
  }
  user : User;
  errors : string[];

  submitUser(){

        this.userService
          .addUser(this.user).subscribe(
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
