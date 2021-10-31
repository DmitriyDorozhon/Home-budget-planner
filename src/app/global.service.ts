import { Injectable } from '@angular/core';
import {IncomService} from "./incom/incom.service";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor() { }
  private _cardMoney:number=0;
  private _cashMoney:number=0;


  get card(){
    return this._cardMoney
  }
  set card(sum){
    this._cardMoney=sum;

  }
  get cash(){
    return this._cashMoney;
  }
  set cash(sum){
    this._cashMoney=sum;

  }



}
