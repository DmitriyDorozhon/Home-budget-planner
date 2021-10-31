import { Component, OnInit } from '@angular/core';
import {IncomService} from "./incom.service";


@Component({
  selector: 'incom',
  templateUrl: './incom.component.html',
  styleUrls: ['./incom.component.css']
})
export class IncomComponent implements OnInit {


  constructor(public incomService:IncomService) { }

  ngOnInit(): void {
  }

}
