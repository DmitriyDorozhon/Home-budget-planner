import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {IncomService} from "../incom.service";
import {MatTable, MatTableModule} from "@angular/material/table";
import {GlobalService} from "../../global.service";
import {global} from "@angular/compiler/src/util";



@Component({
  selector: 'income-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent implements OnInit {



  constructor(public incomeService:IncomService,private global:GlobalService) { }
  displayedColumns: string[] = ['sum', 'comment', 'date', 'wallet','delete'];
  dataSource =this.incomeService.incomeArr;

  @ViewChild(MatTable) table!: MatTable<any>;

  public removeCart(i:any){
    if(this.incomeService.incomeArr[i].wallet === "card"){
    this.global.card-=this.incomeService.incomeArr[i].sum;
    this.incomeService.incomeArr.splice(i,1);
      this.table.renderRows();
    }
    else if(this.incomeService.incomeArr[i].wallet === "cash"){
      this.global.cash-=this.incomeService.incomeArr[i].sum;
      this.incomeService.incomeArr.splice(i,1);
      this.table.renderRows();
    }
  }




  ngOnInit(): void {
  }

}



