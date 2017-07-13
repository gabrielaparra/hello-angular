import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  //{{ username | capitalize }}
  //how we 'call' the pipe
  //         |
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  //      "new york" -> "New York"
  //           |
  transform(value: any, args?: any): any {
    let wordsArray = value.split(' ');

    let capitalizedWords = wordsArray.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })

    return capitalizedWords.join(' ');
    //to return a string instead of an array
  }

}
