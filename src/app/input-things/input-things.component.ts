import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-things',
  templateUrl: './input-things.component.html',
  styleUrls: ['./input-things.component.css']
})
export class InputThingsComponent implements OnInit {
  message: string = 'Select a lunch option';
  lunchSelection: string;
  theProduct: object = {};

  constructor() { }

  ngOnInit() {
  }

  reactToSelection() {
    if (this.lunchSelection === 'taco-bell') {
      this.message = 'You are being irresponsible.'
    } else {
      this.message = 'A fine selection.'
    }
  }

  createProduct() {
    console.log('Product Created.');
    console.log(this.theProduct);
  }

}
