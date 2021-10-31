import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IncomComponent } from './incom/incom.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { ModalAddIncomeComponent } from './incom/modal-add-income/modal-add-income.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { MatTableComponent } from './incom/mat-table/mat-table.component'
import {MatTable, MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IncomComponent,
    ModalAddIncomeComponent,
    MatTableComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        ReactiveFormsModule,
      NgxMaskModule.forRoot(),
      MatTableModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
