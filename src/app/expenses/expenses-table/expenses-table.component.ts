import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableModule} from "@angular/material/table";
import {IncomService} from "../../incom/incom.service";
import {ExpensesService} from "../expenses.service";
import {GlobalService} from "../../global.service";

@Component({
  selector: 'expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.css']
})
export class ExpensesTableComponent implements OnInit {

  constructor(public expensesService: ExpensesService,private global:GlobalService) {
  }

  displayedColumns: string[] = ['sum','category', 'comment', 'date', 'wallet','delete'];
  dataSource = this.expensesService.expensesArr;

  @ViewChild(MatTable) table!: MatTable<any>;





  public removeCart(i:any){
    if(this.expensesService.expensesArr[i].wallet === "card"){
      this.global.card+=this.expensesService.expensesArr[i].sum;
      this.expensesService.expensesArr.splice(i,1);
      this.table.renderRows();

    }
    else if(this.expensesService.expensesArr[i].wallet === "cash"){
      this.global.cash+=this.expensesService.expensesArr[i].sum;
      this.expensesService.expensesArr.splice(i,1);
      this.table.renderRows();
    }
  }


  ngOnInit(): void {
  }

}
