import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-button-page',
  templateUrl: './counter-button-page.component.html',
  styleUrls: ['./counter-button-page.component.css']
})
export class CounterButtonPageComponent implements OnInit {
  initialCount: number = 0;
  showCongratsMsg: boolean = false;
  showCounterButton: boolean = true;

  // ----------------------------------------------------------------------------
  // Separate component that manages the state of a component (counter-button). -
  // ----------------------------------------------------------------------------

  constructor() { }

  ngOnInit(): void {
  }

  toggleCounterBtn(){
    this.showCounterButton = !this.showCounterButton;
  }

  setCongratsFlag(): void {
    this.showCongratsMsg = true;
  }

}
