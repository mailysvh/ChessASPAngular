import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'role'})
export class RolePipe implements PipeTransform {

  transform(value: number): string {
    const enumRole = ["Admin",
      "User"];
    return enumRole[value];
  }
}
