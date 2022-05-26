import { Input, OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';

  doSomething():void {
    alert('Do something...')
  }

  doSomethingElse():void {
    alert('Do something else...')
  }

  doAnotherThing(): void {
    alert('Do another thing...')
  }

}
