import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'passwordBytes'})
export class passwordBytesPipe implements PipeTransform {
  transform(value: any): string {
    if(value == null || value == 0){
      return '?';
    }
    else{
      let str = new TextDecoder().decode(value);
      console.log(str);
      return str;
    }
  }
}
