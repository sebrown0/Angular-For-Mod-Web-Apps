import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterButtonPageComponent } from './counter-button-page/counter-button-page.component';
import { EventHandlingComponent } from './event-handling/event-handling.component';
import { ExampleComponent } from './example/example.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ParamsExampleComponent } from './params-example/params-example.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { UserInfoFormComponent } from './user-info-form/user-info-form.component';


const routes: Routes = [
  { path: 'counter-button', component: CounterButtonPageComponent },
  { path: 'event-handling', component: EventHandlingComponent},
  { path: 'example', component: ExampleComponent},
  { path: 'mulit-choice', component: MultipleChoiceComponent},
  { path: 'people-list', component: PeopleListComponent},
  { path: 'user-info-form', component: UserInfoFormComponent},
  { path: 'params-example/:urlParam/:anotherParam', component: ParamsExampleComponent},
  { path: '**', component: NotFoundPageComponent},
  { path: '', redirectTo: './counter-button', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
