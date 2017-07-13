import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  randomText: string;
  rightNow: Date = new Date();
  currentInvestment: number = 100000;
  rockSearchText: string = "";
  theRockArray: object[] = [
    {
      name: 'Wrestler the Rock',
      pictureUrl: 'https://media.giphy.com/media/HbkT5F5CiRD3O/giphy.gif'
    },
    {
      name: 'Turtleneck the Rock',
      pictureUrl: 'https://media.giphy.com/media/AjkKC77JZVCEg/giphy.gif'
    },
    {
      name: 'Obama the Rock',
      pictureUrl: 'https://media.giphy.com/media/xUPGclBZxPwSQ72n16/giphy.gif'
    },
    {
      name: 'Smiling the Rock',
      pictureUrl: 'https://media.giphy.com/media/l4FGGIIZWoH1AhPIQ/giphy.gif'
    },
    {
      name: 'Raising Eyebrow the Rock',
      pictureUrl: 'https://media.giphy.com/media/TT7JW4Qm7uaNW/giphy.gif'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  addOneHour() {
    let updated = new Date(this.rightNow);
    //make a copy of the date
    updated.setHours(this.rightNow.getHours() + 1);
    //Increase the hours of the copy
    this.rightNow = updated;
    //Save the copy to the object
  }

}
