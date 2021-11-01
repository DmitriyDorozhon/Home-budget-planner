import { Component, OnInit } from '@angular/core';
import {ExpensesService} from "../expenses/expenses.service";
import {IncomService} from "../incom/incom.service";
import {ReportService} from "./report.service";

@Component({
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(public expenses:ExpensesService, public income:IncomService,public reportService:ReportService) { }








  ngOnInit(): void {


  }

}
