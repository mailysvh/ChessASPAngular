import { Type } from "@angular/core";

export default class Utils {

  static enumToSelectInt(enumType : any) : any[] {
    return Object.values(enumType)
        .filter(x => typeof x != 'number')
        .map(x => ({label : <string> x, value : enumType[<number> x]}));
  }

}
