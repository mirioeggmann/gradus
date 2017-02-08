import { Component, OnInit } from '@angular/core';
import {Semester} from "../../shared/models/semester.model";
import {GlobalService} from "../../shared/global.service";
import {SemesterService} from "../../shared/services/semester/semester.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.css']
})
export class SemesterComponent implements OnInit {

  constructor(private globalService : GlobalService, private semesterService : SemesterService, private router : Router) { }

  title = "new Semester";
  semester: Semester = new Semester();
  startString: string;
  endString: string;
  errors: string[];

  submitSemester(){

    this.semester.start = new Date(this.startString).getTime();
    this.semester.end = new Date(this.endString).getTime();

    this.semesterService
      .createSemester(this.semester).subscribe(
      response => {
        if (response["errors"].length == 0) {
          this.router.navigateByUrl("/dashboard");
        } else {
          this.errors = response["errors"];
        }
      },
      err => {
        console.log(err);
      });
  }

  ngOnInit() {
    this.semester.creator = this.globalService.signedUser;

  }

}
