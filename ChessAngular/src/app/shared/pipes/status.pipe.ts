import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'status'})
export class StatusPipe implements PipeTransform {

  transform(value: number): string {
    const enumState = ["Awaiting Players", "Ongoing", "Completed"];
    return enumState[value];
  }
}
