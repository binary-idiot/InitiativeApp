import { Pipe, PipeTransform } from '@angular/core';
import {KeyValue} from "@angular/common";
import {isNumeric, isString} from "@shared/utils/type-utils";

@Pipe({
  name: 'enumKeyVal'
})
export class EnumKeyValPipe implements PipeTransform {

  transform(input: Record<string | number, string | number>): KeyValue<string, string | number>[] {
    return Object.entries(input)
      .filter((kv): kv is [string, string | number] => isString(kv[0]) && !isNumeric(kv[0]))
      .map(kv => { return {key: kv[0], value: kv[1]} });
  }

}
