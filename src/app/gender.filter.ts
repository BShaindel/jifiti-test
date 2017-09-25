import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderfilter'
})

@Injectable()
export class GenderFilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!items) return [];
    if( value == 'all') return items;
    return items.filter(it => it[field].includes( value));
  }
}
