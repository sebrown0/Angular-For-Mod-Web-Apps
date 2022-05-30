import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit, OnDestroy {
  @Input() count: number = 0; //0 is a default paramter for when nothing is passed in.
  @Output() congratsEvent = new EventEmitter<void>();

  constructor(private router: Router) { }

  ngOnInit(): void {
    // alert("In ngOnInit");
  }
  ngOnDestroy(): void {
    // alert("In ngOnDestroy");
  }
  increment(): void {
    this.count++;
    if(this.count > 10){
      // this.congratsEvent.emit();
      // navigate programitacally instead of using the observer pattern.
      // This can be used when we want to navigate without the user
      // explicitly clicking a link or route.
      this.router.navigateByUrl('/event-handling');
    }
  }

  decrement(): void {
    this.count--;
  }

}
