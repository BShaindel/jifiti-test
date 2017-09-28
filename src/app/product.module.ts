import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductComponent } from './components/product.component';
import {HttpModule} from "@angular/http";
import {GenderFilterPipe} from "./filters/gender.filter";
import {FormsModule} from "@angular/forms";
import {BudgetFilterPipe} from "./filters/budget.filter";

@NgModule({
  declarations: [
    ProductComponent,
    GenderFilterPipe,
    BudgetFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class ProductModule { }
