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

  headingColor: string = '';

  dropddownSelection: string = '';

  constructor() { }

  // ngOnInit() will be called as soon as the component is loaded
  ngOnInit() {
    setInterval(() => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const randomRGB = `rgb(${r}, ${g}, ${b})`;

      this.headingColor = randomRGB
    }, 5000);
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
