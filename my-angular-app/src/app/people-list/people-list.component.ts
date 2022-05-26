import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  showList: boolean = false;
  people = [{
    name: 'John',
    age: 34,
    hairColour: 'brown'},{
    name: 'Jane',
    age: 56,
    hairColour: 'blonde'
    },{
    name: 'Bob',
    age: 41,
    hairColour: 'red'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
