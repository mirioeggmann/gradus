import { Component, OnInit } from '@angular/core';
import {User} from "../shared/models/user.model";
import {UserService} from "../shared/services/user/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService : UserService) {
    this.user = new User();
  }
  user : User;

  submitUser(){

        this.userService
          .addUser(this.user).subscribe(
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
