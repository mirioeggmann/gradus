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
import { Subject } from '../shared/models/subject';
import {SubjectService} from "../shared/services/subject/subject.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  errorMessage: string;
  subjects: Subject[];

  selected:Array<ITableItem> = new Array<ITableItem>();

  public tableModel = new MdlDefaultTableModel([
           {key:'subject', name:'Subject', sortable:true},
           {key:'weight', name:'Weight', sortable:true, numeric:true},
           {key:'average', name:'Average', numeric:true}
        ]);

  user : User = new User();
  semesters: Semester[] = [
    new Semester(1, "1. Semester", 1),
    new Semester(2, "2. Semester", 1),
    new Semester(3, "3. Semester", 1)
  ];


  semesterControl = {
    active: "allGrades",

  };


  constructor(private _SubjectService : SubjectService) { }

  ngOnInit() {
    this._SubjectService.getSubjects().subscribe(
      subjects => this.subjects = subjects,
      error =>  this.errorMessage = <any>error);
    this.user.firstname = "Manuel";
  }

}
