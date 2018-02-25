import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    if (!value || !value.length) return [];
    return value.filter(item =>
      item.category.toUpperCase().indexOf(args.toUpperCase()) !== -1);
  }
}
