import { Injectable } from '@angular/core';

import {IncomService} from "../incom/incom.service";
import {ExpensesService} from "../expenses/expenses.service";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private incomeService: IncomService,private expensesService:ExpensesService) {
  }
  public getSumSumCardAndCash(arrUse:string,get:string):number{
    let arr:any;
    if (arrUse==="income"){
      arr=this.incomeService.incomeArr;
    }
    else if (arrUse==="expenses"){
      arr=this.expensesService.expensesArr
    };
    let Sum:number=0;
    arr.forEach((item:any)=>{
      if (get === "sum"){
        Sum+=item.sum;
      }
      else {
        if (item.wallet===get){
          Sum+=item.sum;
        }
      }
    })
    return Sum;
  };

  public getResult(): string{
  let result:string= "";
  const incomeSum:number = this.getSumSumCardAndCash("income","sum");
  const expensesSum:number = this.getSumSumCardAndCash("expenses","sum");
    if(incomeSum>expensesSum){
      result = `You got more than you spent.`
     ;
    }
    else if(expensesSum>incomeSum){
      result = `You spent more than you received.`

    }
        return result;
  };

  public getProfitOrLoss (){
    let result:number= 0;
    const incomeSum:number = this.getSumSumCardAndCash("income","sum");
    const expensesSum:number = this.getSumSumCardAndCash("expenses","sum");
    if(incomeSum>expensesSum){
      result = incomeSum - expensesSum;
    }
    else if(expensesSum>incomeSum){
      result = expensesSum - incomeSum;
    }
    return result;
  }

  public getCategorySum(category:string):number{
    let categorySum:number=0;
    this.expensesService.expensesArr.forEach((item)=>{
      if(item.category===category){
        categorySum+=item.sum
      }
    })
      return categorySum;
  }

  public getPercent(sum:number){
  const expensesSum: number = this.getSumSumCardAndCash("expenses", "sum");
  let percent:number = 100 * sum / expensesSum;
  return percent.toFixed(2);
};
  public getSpentPercent(){
    const incomeSum:number = this.getSumSumCardAndCash("income","sum");
    const expensesSum:number = this.getSumSumCardAndCash("expenses","sum");
    let percent = 100*expensesSum/incomeSum;
    return percent.toFixed(2);
  }




}
