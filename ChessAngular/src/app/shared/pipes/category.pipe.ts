import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'category'})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    const timeDiff = Math.abs(Date.now() - new Date(value).getTime());
    const age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);

    const enumCategory = ["Junior", "Senior", "Veteran"];
    if(age<18){return enumCategory[0];}
    if(age<60){return enumCategory[1];}
    else{return enumCategory[2];}
  }
}
