import { Component, OnInit } from '@angular/core';
import {User} from "../shared/models/user.model";
import {UserService} from "../shared/services/user/user.service";
import {GlobalService} from "../shared/global.service";
import {Subject} from "../shared/models/subject.model";
import {SubjectService} from "../shared/services/subject/subject.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _UserService : UserService, private globalService : GlobalService, private subjectService : SubjectService, private router : Router) { }

  user : User = this.globalService.signedUser;
  subject : Subject = new Subject();
  errors: string[];

  editingOptions = {
    editIcon: "edit",
    submitIcon: "done",
    isEditing: false,
  };

  getSubjects(){
    this.subjectService.getSubjects().subscribe(
      subjects => this.subjects = subjects,
      error =>  this.errors += <any>error);
  };
  subjects : Subject[];

  changeEditState() {
    if (!this.editingOptions.isEditing) {}
    this.editingOptions.isEditing = !this.editingOptions.isEditing;
  }

  getUser() {
    this._UserService.getUser(this.globalService.signedUser.id).subscribe(
      user => this.user = user);
  }

  submitSubject(){

    this.subjectService
      .createSubject(this.subject).subscribe(
      response => {
        if (response["errors"].length == 0) {
          this.subjects.push(this.subject);
          this.subject = new Subject();
          this.subject.creator = this.globalService.signedUser;
        } else {
          this.errors = response["errors"];
        }
      },
      err => {
        console.log(err);
      });
  }

  isEmpty() {
    if (this.subjects && this.subjects.length == 0) {
      return "center";
    } else {
      return null;
    }
  }

  ngOnInit() {
    this.subject.creator = this.globalService.signedUser;
    this.getSubjects();
  }

}
