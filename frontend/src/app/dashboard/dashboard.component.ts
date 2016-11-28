import { Component, OnInit } from '@angular/core';

import { IMdlTableModelItem, MdlDefaultTableModel } from '../../../node_modules/angular2-mdl'

export interface ITableItem extends IMdlTableModelItem {
  subject: string;
  weight: number;
  average: number
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tableData:[ITableItem] = [
         {subject:'French', weight:1, average:5.25, selected:true},
         {subject:'German', weight:1, average:4.0, selected:false},
         {subject:'Math', weight:2, average:6, selected:false}
      ];

  selected:Array<ITableItem> = new Array<ITableItem>();

  public tableModel = new MdlDefaultTableModel([
           {key:'subject', name:'Subject', sortable:true},
           {key:'weight', name:'Weight', sortable:true, numeric:true},
           {key:'average', name:'Average', numeric:true}
        ]);

  constructor() { }

  ngOnInit() {
    this.tableModel.addAll(this.tableData);
    this.selected = this.tableData.filter( data => data.selected);
  }

}
