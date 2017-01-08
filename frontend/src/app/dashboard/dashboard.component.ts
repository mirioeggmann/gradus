import { Component, OnInit } from '@angular/core';

import { IMdlTableModelItem, MdlDefaultTableModel } from '../../../node_modules/angular2-mdl'
import {GlobalService} from "../shared/global.service";
import {User} from "../shared/models/user.model";
import {Semester} from "../shared/models/semester.model";

export interface ITableItem extends IMdlTableModelItem {
  subject: string;
  weight: number;
  average: number
}
import { Subject } from '../shared/models/subject.model';
import {SubjectService} from "../shared/services/subject/subject.service";
import {SemesterService} from "../shared/services/semester/semester.service";
import {Grade} from "../shared/models/grade.model";
import {GradeService} from "../shared/services/grade/grade.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private subjectService : SubjectService, private semesterService : SemesterService, private gradeService : GradeService) { }

  errorMessage: string;


  selected:Array<ITableItem> = new Array<ITableItem>();

  public tableModel = new MdlDefaultTableModel([
           {key:'subject', name:'Subject', sortable:true},
           {key:'weight', name:'Weight', sortable:true, numeric:true},
           {key:'average', name:'Average', numeric:true}
        ]);

  user : User = new User();

  getSemesters(){
    this.semesterService.getSemesters().subscribe(
      semesters => this.semesters = semesters,
      error =>  this.errorMessage += <any>error);
  };
  semesters: Semester[];

  getGrades(){
    this.gradeService.getGrades().subscribe(
      grades => this.grades = grades,
      error => this.errorMessage += <any>error);
  }
  grades: Grade[];

  semesterControl = {
    active: "allGrades",

  };

  ngOnInit() {

    this.user.firstname = "Manuel";
    this.getSemesters();
    this.getGrades();
  }

}
