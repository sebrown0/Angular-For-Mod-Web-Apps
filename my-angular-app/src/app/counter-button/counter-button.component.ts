import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {
  @Input() count: number = 0; //0 is a default paramter for when nothing is passed in.
  @Output() congratsEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  increment(): void {
    this.count++;
    if(this.count > 10){
      this.congratsEvent.emit();
    }
  }

  decrement(): void {
    this.count--;
  }

}
