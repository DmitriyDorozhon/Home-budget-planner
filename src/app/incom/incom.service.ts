import { Injectable } from '@angular/core';
import {GlobalService} from "../global.service";


@Injectable({
  providedIn: 'root'
})
export class IncomService {

  constructor(private global:GlobalService) { }
  public modalVisible:boolean=false;
  public incomeArr:any[]=[
    {
      sum:12500,
      comment:"test",
      date:new Date().toDateString(),
      wallet:"card"
    },{
      sum:3800,
      comment:"test",
      date:new Date().toDateString(),
      wallet:"cash"
    }
  ];


  public addIncomeSum(){
    this.global.card=0;
    this.global.cash=0;
    this.incomeArr.forEach((item)=>{

      if (item.wallet==="card"){
        this.global.card+=item.sum
      }
      else if (item.wallet==="cash"){
        this.global.cash+=item.sum
      };
    })

  }



}
