import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-congratulations-message',
  templateUrl: './congratulations-message.component.html',
  styleUrls: ['./congratulations-message.component.css']
})
export class CongratulationsMessageComponent implements OnInit {
  @Input() showMsg: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
