import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  randomText: string;
  rightNow: Date = new Date();
  currentInvestment: number = 100000

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
