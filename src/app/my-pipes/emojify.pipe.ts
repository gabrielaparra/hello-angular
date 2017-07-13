import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emojify'
})
export class EmojifyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (typeof value !== 'string') {
      return "";
    } else {
      return value.replace(/pizza/i, '🍕')
      // /word/i ==> case insensitive
      .replace(/fencing/i, '🤺')
      .replace(/avocado/i, '🥑')
      .replace(/wine/i, '🍷');
    }
  }

}
