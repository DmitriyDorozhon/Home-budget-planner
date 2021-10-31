import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {IncomService} from "../incom.service";
import {MatTable, MatTableModule} from "@angular/material/table";



@Component({
  selector: 'income-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent implements OnInit {



  constructor(public incomeService:IncomService) { }
  displayedColumns: string[] = ['sum', 'comment', 'date', 'wallet'];
  dataSource =this.incomeService.incomeArr;

  @ViewChild(MatTable) table!: MatTable<any>;

  addData() {
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }


  ngOnInit(): void {
  }

}



