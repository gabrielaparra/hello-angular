import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cool-bindings',
  templateUrl: './my-cool-bindings.component.html',
  styleUrls: ['./my-cool-bindings.component.css']
})
export class MyCoolBindingsComponent implements OnInit {
  feedbackMessage: string = 'Please click on these things.';
  imageUrl: string = 'https://media.giphy.com/media/MSaycjiiWDBOE/giphy.gif'
  clickCount: number = 0;
  isInputDisabled: boolean = false;
  buttonText: string = 'Disable the Input'

  constructor() { }

  ngOnInit() {
  }

  changetheImage() {
    if (this.imageUrl === 'https://media.giphy.com/media/MSaycjiiWDBOE/giphy.gif') {
      this.imageUrl = 'https://media.giphy.com/media/3ohze0jPWQJJ2EEo7K/giphy.gif'
    } else {
      this.imageUrl = 'https://media.giphy.com/media/MSaycjiiWDBOE/giphy.gif'
    }
    this.clickCount += 1
  }

  updateMessage() {
    this.feedbackMessage = 'Thanks for clicking.'
    this.clickCount += 1;
  }

  toggleThatInput() {
    if (this.isInputDisabled === true) {
      this.isInputDisabled = false
      this.buttonText = 'Disable the Input'
    } else {
      this.isInputDisabled = true
      this.buttonText = 'Enable the Input'
    }
  }

}
