import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component'

const routes: Routes = [
  //& This below is setting the url path as the default (/)
  //& Then it renders the component that is declared
  { path: '', component: TodosComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
