import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'isNull'})
export class IsNullPipe implements PipeTransform {
  transform(value: any): any {
    if(value == null || value == 0){
      return '?';
    }
  }
}
