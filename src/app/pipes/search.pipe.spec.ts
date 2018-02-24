import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(item =>
      item.title.toUpperCase().indexOf(args.toUpperCase()) !== -1 ||
      item.description.toUpperCase().indexOf(args.toUpperCase()) !== -1 ||
      item.category.toUpperCase().indexOf(args.toUpperCase()) !== -1);
  }
}
