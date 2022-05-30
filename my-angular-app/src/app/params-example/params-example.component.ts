import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-params-example',
  templateUrl: './params-example.component.html',
  styleUrls: ['./params-example.component.css']
})
export class ParamsExampleComponent implements OnInit {
  urlParam: string | null = '';
  anotherParam: string | null = '';
  params: any [] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.urlParam = this.route.snapshot.paramMap.get('urlParam');
    this.anotherParam = this.route.snapshot.paramMap.get('anotherParam');
    console.log(this.route.queryParams);
    console.log(this.route.queryParams.subscribe(
      p => this.params = Object.keys(p).map(key => ( { name: key, value: p[key] } ))));
  }

}
