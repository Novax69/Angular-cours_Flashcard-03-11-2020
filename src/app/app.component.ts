import { Component } from '@angular/core';
import { IFlash } from './components/flash.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  flashs: IFlash[] = [
    {
      question: 'Question 1',
      answer: 'Answer 1',
      id:getRandomNumber(),
      show:false
    },
    {
      question: 'Question 2',
      answer: 'Answer 2',
      id:getRandomNumber(),
      show:false
    },
    {
      question: 'Question 3',
      answer: 'Answer 3',
      id:getRandomNumber(),
      show:false
    }
  ];
  trackByFlashId(index, flash) {
    return flash.id;
  }

  handleToggleCard(id:number): void {
    const flash= this.flashs.find(flash => flash.id === id);
    flash.show = !flash.show;
  }
  

  title = 'flashcard';
}


function getRandomNumber() {
  return Math.floor(Math.random() * 10000);
}
