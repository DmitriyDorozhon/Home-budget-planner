import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableModule} from "@angular/material/table";
import {IncomService} from "../../incom/incom.service";
import {ExpensesService} from "../expenses.service";

@Component({
  selector: 'expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.css']
})
export class ExpensesTableComponent implements OnInit {

  constructor(public expensesService: ExpensesService) {
  }

  displayedColumns: string[] = ['sum','category', 'comment', 'date', 'wallet'];
  dataSource = this.expensesService.expensesArr;

  @ViewChild(MatTable) table!: MatTable<any>;


  public removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }


  ngOnInit(): void {
  }

}
