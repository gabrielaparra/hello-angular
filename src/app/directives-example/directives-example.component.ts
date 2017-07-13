import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-example',
  templateUrl: './directives-example.component.html',
  styleUrls: ['./directives-example.component.css']
})
export class DirectivesExampleComponent implements OnInit {
  isBigSize: boolean = false;
  hasColor: boolean = false;
  isComic: boolean = true;

  dropddownSelection: string = "";

  constructor() { }

  ngOnInit() {
  }

  buttonA() {
    if (this.isBigSize) {
      this.isBigSize = false;
    } else {
      this.isBigSize = true;
    }
  }

  buttonB() {
    if (this.hasColor) {
      this.hasColor = false;
    } else {
      this.hasColor = true;
    }
  }

  buttonC() {
    if (this.isComic) {
      this.isComic = false;
    } else {
      this.isComic = true;
    }
  }
}
