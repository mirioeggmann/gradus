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
  defaultSubject: Subject = new Subject();
  subject : Subject = new Subject();
  subjectToDelete : Subject = this.defaultSubject;
  createErrors: string[];
  deleteErrors: string[];
  errors: string[];

  editingOptions = {
    editIcon: "edit",
    deleteIcon: "delete",
    submitIcon: "done",
    cancelIcon: "close",
    isEditing: false,
    isDeleting: false,
    action: ""
  };

  makeLeftAction() {

    if(this.editingOptions.isEditing) {

      this.changeUserInfo();
      this.editingOptions.action = "";
      this.editingOptions.isEditing = !this.editingOptions.isEditing;

    } else if (this.editingOptions.isDeleting) {

      this.deleteUser();
      this.editingOptions.action = "";
      this.editingOptions.isDeleting = !this.editingOptions.isDeleting;

    } else {

      this.editingOptions.isEditing = !this.editingOptions.isEditing;
      this.editingOptions.action = "edit";

    }

  }

  makeRightAction() {

    if(this.editingOptions.isEditing) {

      this.getUser();
      this.editingOptions.isEditing = !this.editingOptions.isEditing;
      this.editingOptions.action = "";

    } else if(this.editingOptions.isDeleting) {

      this.editingOptions.isDeleting = !this.editingOptions.isDeleting;
      this.editingOptions.action = "";

    } else {

      this.editingOptions.isDeleting = !this.editingOptions.isDeleting;
      this.editingOptions.action = "delete";

    }

  }

  changeUserInfo() {



  }

  deleteUser() {

    this._UserService.deleteUser(this.globalService.signedUser).subscribe(
      response => this.errors.push(response),
      error =>  this.errors += <any>error);

  }

  getSubjects(){
    this.subjectService.getSubjects().subscribe(
      subjects => this.subjects = subjects,
      error =>  this.errors += <any>error);
  };
  subjects: Subject[];

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

          this.createErrors = [];

        } else {
          this.createErrors = response["errors"];
        }
      },
      err => {
        console.log(err);
      });
  }

  deleteSubject() {

    this.subjectService
      .deleteSubject(this.subjectToDelete).subscribe(
      response => {
        if (response["errors"].length == 0) {
          this.subjectToDelete = this.defaultSubject;
          this.getSubjects();
          this.deleteErrors = [];
        } else {
          this.deleteErrors = response["errors"];
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
