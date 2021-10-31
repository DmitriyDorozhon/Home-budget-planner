import {Component,  OnInit} from '@angular/core';
import {IncomService} from "../incom.service";
import {GlobalService} from "../../global.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IncomeObj} from "./income-obj.model";

@Component({
  selector: 'modal-add-income',
  templateUrl: './modal-add-income.component.html',
  styleUrls: ['./modal-add-income.component.css'],
})

export class ModalAddIncomeComponent implements OnInit {

  constructor(public incomService:IncomService, public global:GlobalService) {

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
      this.incomService.incomeArr.push(new IncomeObj(incomeSum,incomeComment,incomeDate.toDateString(),incomeWallet))
      this.incomService.addIncomeSum();
      this.incomService.modalVisible=false;

    }





  }

  ngOnInit(): void {
  }


}
