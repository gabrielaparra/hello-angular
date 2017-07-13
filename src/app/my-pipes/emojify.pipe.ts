import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emojify'
})
export class EmojifyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (typeof value !== 'string') {
      return "";
    } else {
      return value.replace(/pizza/ig, '🍕')
      // /word/i ==> case insensitive
      // /word/ig ==> (g)lobal match (check the whole string)
                  .replace(/fencing/ig, '🤺')
                  .replace(/avocado/ig, '🥑')
                  .replace(/wine/ig, '🍷');
    }
  }

}
