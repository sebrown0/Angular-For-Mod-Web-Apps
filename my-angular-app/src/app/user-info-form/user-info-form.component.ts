import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info-form',
  templateUrl: './user-info-form.component.html',
  styleUrls: ['./user-info-form.component.css']
})
export class UserInfoFormComponent implements OnInit {
  name: string = '';
  age: string = '';
  hairColour: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  displayValues(): void {
    console.log(`Name: ${this.name} - Age: ${this.age} - Hair Colour: ${this.hairColour}`);
  }
}
