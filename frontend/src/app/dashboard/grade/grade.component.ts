import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../shared/global.service";
import {Router} from "@angular/router";
import {GradeService} from "../../shared/services/grade/grade.service";
import {Grade} from "../../shared/models/grade.model";

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {

  constructor(private globalService : GlobalService, private gradeService : GradeService, private router : Router) { }

  title = "new Semester";
  grade: Grade = new Grade();
  dateString: string;
  errors: string[];

  submitSemester(){

    this.grade.date = new Date(this.dateString).getTime();

    this.gradeService
      .createGrade(this.grade).subscribe(
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

  }
}
