import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  templateUrl: './event-handling.component.html',
  styleUrls: ['./event-handling.component.css']
})
export class EventHandlingComponent implements OnInit {
  message: string = "I'm a component";

  constructor() { }

  ngOnInit(): void {
  }

  doSomething(msg: string):void {
    alert(`The button says: ${msg}`)
  }
}
