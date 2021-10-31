import { Component ,  OnInit} from '@angular/core';
import {GlobalService} from "./global.service";
import {IncomService} from "./incom/incom.service";
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";
import {ExpensesService} from "./expenses/expenses.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Money Proj';
  constructor(private global:GlobalService,private incomeService:IncomService,private expensesService:ExpensesService) {
  }

  ngOnInit(): void {
    this.incomeService.addIncomeSum();
    this.expensesService.subtractExpensesSum();
  }
}
