import {Component, OnInit} from '@angular/core';
import {ExpensesService} from "./expenses.service";

@Component({
  selector: 'expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  constructor(public expensesService: ExpensesService) {
  }

  ngOnInit(): void {
  }

}
