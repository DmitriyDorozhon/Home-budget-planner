import {Injectable} from '@angular/core';
import {GlobalService} from "../global.service";
import {IncomService} from "../incom/incom.service";

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private global: GlobalService, private incomeService: IncomService) {
  }

  modalVisible = false;

  public expensesArr: any[] = [
    {
      sum: 100,
      comment: "test",
      date: new Date().toDateString(),
      wallet: "card",
      category:"groceries"
    },
    {
      sum: 200,
      comment: "test",
      date: new Date().toDateString(),
      wallet: "cash",
      category:"home"
    },
    {
      sum: 300,
      comment: "test",
      date: new Date().toDateString(),
      wallet: "cash",
      category:"transportation"
    },
    {
      sum: 500,
      comment: "test",
      date: new Date().toDateString(),
      wallet: "card",
      category:"leisure"
    },
    {
      sum: 154,
      comment: "test",
      date: new Date().toDateString(),
      wallet: "card",
      category:"health"
    },
    {
      sum: 75,
      comment: "test",
      date: new Date().toDateString(),
      wallet: "card",
      category:"communal payments"
    },{
      sum: 125,
      comment: "test",
      date: new Date().toDateString(),
      wallet: "cash",
      category:"gifts"
    },{
      sum: 423,
      comment: "test",
      date: new Date().toDateString(),
      wallet: "cash",
      category:"other"
    },
  ];



  public subtractExpensesSum() {
    this.incomeService.addIncomeSum();
    this.expensesArr.forEach((item) => {

      if (item.wallet === "card") {
        this.global.card -= item.sum
      } else if (item.wallet === "cash") {
        this.global.cash -= item.sum
      }
      ;
    });

  }





}
