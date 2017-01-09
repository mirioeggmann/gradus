import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../shared/global.service";
import {Router} from "@angular/router";
import {GradeService} from "../../shared/services/grade/grade.service";
import {Grade} from "../../shared/models/grade.model";
import {SubjectService} from "../../shared/services/subject/subject.service";
import {SemesterService} from "../../shared/services/semester/semester.service";
import {Semester} from "../../shared/models/semester.model";
import {Subject} from "../../shared/models/subject.model";

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {

  constructor(private globalService : GlobalService, private gradeService : GradeService,
              private subjectService : SubjectService, private semesterService : SemesterService,
              private router : Router) { }

  title = "new Semester";
  grade: Grade = new Grade();
  dateString: string;
  errors: string[];

  getSemesters(){
    this.semesterService.getSemesters().subscribe(
      semesters => this.semesters = semesters,
      error =>  this.errors += <any>error);
  };
  semesters: Semester[];

  getSubjects(){
    this.subjectService.getSubjects().subscribe(
      subjects => this.subjects = subjects,
      error =>  this.errors += <any>error);
  };
  subjects: Subject[];

  subjectIndex: number;
  semesterIndex: number;

  changeSubject() {
    this.grade.subject = this.subjects[this.subjectIndex];
  }

  changeSemester() {
    this.grade.semester = this.semesters[this.semesterIndex];
  }

  submitGrade(){

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
    this.grade.creator = this.globalService.signedUser;
    this.getSemesters();
    this.getSubjects();
  }
}
