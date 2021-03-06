import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  @Input() name: string | undefined;
  @Input() age: string | undefined;
  @Input() hairColour: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
