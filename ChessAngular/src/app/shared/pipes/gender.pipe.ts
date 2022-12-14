import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'gender'})
export class GenderPipe implements PipeTransform {

  transform(value: number): string {
    const enumGender = ["Woman", "Man", "Other"];
    return enumGender[value];
  }
}
