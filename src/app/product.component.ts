import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
// products = http.get('products.json');
  jsonContent: Array<any>;
  genderListFilter: string;
  genderSelected: string = 'all';
  allBudgets: Array<any> = [
    {displayText:'up to $25', minValue:0, maxValue:25},
    {displayText:'$25 - $50', minValue:25, maxValue:50},
    {displayText:'$50 - $75', minValue:50, maxValue:75},
    {displayText:'$75 - $100', minValue:75, maxValue:100},
    {displayText:'$100+', minValue:100, maxValue:999},
    {displayText:'All', minValue:0, maxValue:-1}
  ];
  budgetListFilter: number;
  priceMinSelected: number;
  priceMaxSelected: number = -1;
  constructor(private http: Http) {
    this.jsonContent = [];
    this.getJSON().subscribe(data => this.jsonContent=data, error => console.log(error, 'infoooooo'), () => console.log('compleeeeeeeee'));

    /*this.getJSON()
      .map(res => {return res.Stores}, err => console.log(err))
      .map(store => new Store(store.StoreName, store.StoreId, store.Products, store.StoreLogo));*/
}
  public getJSON(): Observable<any> {
    return this.http.get('/assets/products.json')
      .map(res =>  res.json());
      // .catch((error:any) => console.log(error));

  }

  public selectGender(){
    console.log(this.genderListFilter,'11111111')
    this.genderSelected = this.genderListFilter;
  }
  public selectBudget(){
    console.log(this.budgetListFilter,'11111111')
    this.priceMinSelected = this.budgetListFilter['minValue'];
    this.priceMaxSelected = this.budgetListFilter['maxValue'];
  }

}
