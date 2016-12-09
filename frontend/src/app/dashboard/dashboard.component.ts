import { Component, OnInit } from '@angular/core';
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

  constructor(private _SubjectService : SubjectService) { }

  ngOnInit() {
    this._SubjectService.getSubjects().subscribe(
      subjects => this.subjects = subjects,
      error =>  this.errorMessage = <any>error);
  }

}
