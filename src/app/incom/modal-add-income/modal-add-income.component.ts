import {Component,  OnInit} from '@angular/core';
import {IncomService} from "../incom.service";
import {GlobalService} from "../../global.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {modelSendObj} from "./model-send-obj.model";
import {MatTableComponent} from "../Income-table/mat-table.component";
import {ExpensesService} from "../../expenses/expenses.service";

@Component({
  selector: 'modal-add-income',
  templateUrl: './modal-add-income.component.html',
  styleUrls: ['./modal-add-income.component.css'],
})

export class ModalAddIncomeComponent implements OnInit {

  constructor(public incomService:IncomService, public global:GlobalService,private expenses:ExpensesService) {

  }

  incomeFormGroup:FormGroup = new FormGroup({
      "sum":new FormControl("",[Validators.required]),
      "comment":new FormControl("",[Validators.required]),
      "date":new FormControl(new Date,[Validators.required]),
      "wallet":new FormControl("",[Validators.required]),
  });



  public addIncome(){
    const incomeSum=+(this.incomeFormGroup.controls.sum.value);
    const incomeComment=(this.incomeFormGroup.controls.comment.value);
    const incomeDate=(this.incomeFormGroup.controls.date.value);
    const incomeWallet=this.incomeFormGroup.controls.wallet.value;


    if(this.incomeFormGroup.valid){
      this.incomService.incomeArr.push(new modelSendObj(incomeSum,incomeComment,incomeDate.toDateString(),incomeWallet))
      if (incomeWallet==="card"){
        this.global.card+=incomeSum
      }
      else if (incomeWallet==="cash"){
        this.global.cash+=incomeSum
      };
      this.incomService.modalVisible=false;



    }





  }

  ngOnInit(): void {
  }


}
