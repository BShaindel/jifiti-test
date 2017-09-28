import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'budgetfilter'
})

@Injectable()
export class BudgetFilterPipe implements PipeTransform {
  transform(items: any[], field: string, minValue: number, maxValue:number): any[] {
    if (!items) return [];
    if( maxValue == -1) return items;
    return items.filter(it => (it[field]>= minValue && it[field]<= maxValue));
  }
}
