import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectValues'
})
export class ObjectValuesPipe implements PipeTransform {

  transform(value: { [key: string]: any; [index: number]: string }): any {
    return Object.values(value);
  }

}
