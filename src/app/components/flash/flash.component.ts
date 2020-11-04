import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { IFlash } from '../flash.model';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css']
})
export class FlashComponent implements OnInit {
  @Input() flash: IFlash = {
    id:1,
    question: 'React or Angular ?',
    answer: 'No Reaction',
    show: false
  }

  @Output() onToggleCard = new EventEmitter();

  toggleCard() {
    this.onToggleCard.emit(this.flash.id);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
