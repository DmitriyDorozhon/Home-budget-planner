import {Component, OnInit} from '@angular/core';
import {IncomService} from "../../incom/incom.service";
import {GlobalService} from "../../global.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {modelSendObj} from "../../incom/modal-add-income/model-send-obj.model";
import {ExpensesService} from "../expenses.service";
import {global} from "@angular/compiler/src/util";


enum Categories {
  Groceries = "groceries",
  Home="home",
  Transportation = "transportation",
  Leisure="leisure",
  Health="health",
  Сommunal="communal payments",
  Gifts="gifts",
  Other="other",
};

@Component({
  selector: 'expenses-modal',
  templateUrl: './expenses-modal.component.html',
  styleUrls: ['./expenses-modal.component.css']
})


export class ExpensesModalComponent implements OnInit {
  constructor(public expensesService: ExpensesService, public global: GlobalService) {

  }
  public categories = [
    "groceries",
    "home",
    "transportation",
    "leisure",
    "health",
    "communal payments",
    "gifts",
    "other"
  ]

  expensesFormGroup: FormGroup = new FormGroup({
    "sum": new FormControl("", [Validators.required]),
    "comment": new FormControl("", [Validators.required]),
    "date": new FormControl(new Date, [Validators.required]),
    "wallet": new FormControl("", [Validators.required]),
    "category": new FormControl("", [Validators.required]),

  });


  public addExpenses() {
    const ExpensesSum = +(this.expensesFormGroup.controls.sum.value);
    const ExpensesComment = (this.expensesFormGroup.controls.comment.value);
    const ExpensesDate = (this.expensesFormGroup.controls.date.value);
    const ExpensesWallet = this.expensesFormGroup.controls.wallet.value;
    const ExpensesCategory = this.expensesFormGroup.controls.category.value;


    if (this.expensesFormGroup.valid) {
      this.expensesService.expensesArr.push(new modelSendObj(ExpensesSum, ExpensesComment, ExpensesDate.toDateString(), ExpensesWallet,ExpensesCategory));
      this.expensesService.subtractExpensesSum();
      this.expensesService.modalVisible = false;
      console.log(this.expensesService.expensesArr);
      console.log(ExpensesCategory);


    }


  }

  ngOnInit(): void {
  }


}
