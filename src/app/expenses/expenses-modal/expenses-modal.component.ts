import {Component, OnInit} from '@angular/core';
import {IncomService} from "../../incom/incom.service";
import {GlobalService} from "../../global.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {modelSendObj} from "../../incom/modal-add-income/model-send-obj.model";
import {ExpensesService} from "../expenses.service";
import {global} from "@angular/compiler/src/util";

@Component({
  selector: 'expenses-modal',
  templateUrl: './expenses-modal.component.html',
  styleUrls: ['./expenses-modal.component.css']
})
export class ExpensesModalComponent implements OnInit {
  constructor(public expensesService: ExpensesService, public global: GlobalService) {

  }

  expensesFormGroup: FormGroup = new FormGroup({
    "sum": new FormControl("", [Validators.required]),
    "comment": new FormControl("", [Validators.required]),
    "date": new FormControl(new Date, [Validators.required]),
    "wallet": new FormControl("", [Validators.required]),
  });


  public addExpenses() {
    const ExpensesSum = +(this.expensesFormGroup.controls.sum.value);
    const ExpensesComment = (this.expensesFormGroup.controls.comment.value);
    const ExpensesDate = (this.expensesFormGroup.controls.date.value);
    const ExpensesWallet = this.expensesFormGroup.controls.wallet.value;


    if (this.expensesFormGroup.valid) {
      this.expensesService.expensesArr.push(new modelSendObj(ExpensesSum, ExpensesComment, ExpensesDate.toDateString(), ExpensesWallet));
      console.log(this.expensesService.expensesArr)
      this.expensesService.subtractExpensesSum();
      console.log(this.global.cash);
      this.expensesService.modalVisible = false;


    }


  }

  ngOnInit(): void {
  }


}
