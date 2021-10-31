import { Injectable } from '@angular/core';
import {GlobalService} from "../global.service";
import {IncomService} from "../incom/incom.service";

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private global:GlobalService, private incomeService:IncomService) { }
  modalVisible=false;

  public expensesArr:any[]=[
    {
      sum:100,
      comment:"test",
      date:new Date().toDateString(),
      wallet:"card"
    },{
      sum:100,
      comment:"test",
      date:new Date().toDateString(),
      wallet:"cash"
    }
  ];


  public subtractExpensesSum(){
      this.incomeService.addIncomeSum();
    this.expensesArr.forEach((item)=>{

      if (item.wallet==="card"){
        this.global.card-=item.sum
      }
      else if (item.wallet==="cash"){
        this.global.cash-=item.sum
      };
    })

  }

}
