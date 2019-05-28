import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sortBy'
})

export class SortPipe implements PipeTransform {
  transform(array: Array<any>, args: string, order: string = 'asc'): Array<any> {
    if (order === 'asc') {
      array.sort((a, b) => {
        if (a[args] === b[args]) {
          return 0;
        }
        return a[args] > b[args] ? 1 : -1;
      });
    } else if (order === 'desc') {
      array.sort((a: any, b: any) => {
        if (a[args] === b[args]) {
          return 0;
        }
        return a[args] > b[args] ? -1 : 1;
      });
    }
    return array;
  }
}
