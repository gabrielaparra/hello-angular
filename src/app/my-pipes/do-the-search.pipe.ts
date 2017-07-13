import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doTheSearch'
})
export class DoTheSearchPipe implements PipeTransform {

  transform(value: any, searchTerm: string): any {
    //*ngFor="let rock of (theRockArray | doTheSearch:'fast')"
    //value = theRocks
    //searchTerm = 'fast' (value of the input, rockSearchText)

    if (!value) {
      return [];
      //if value is undefined return an empty array
    }

    if (!searchTerm) {
      //if no search term is provided return the ORIGINAL array
      return value;
    }

    let matchedResults = [];
    searchTerm = searchTerm.toLowerCase();
    value.forEach((item) => {
      if (item.name.toLowerCase().includes(searchTerm)) {
        matchedResults.push(item);
      }
    });

    return matchedResults;
  }

}
