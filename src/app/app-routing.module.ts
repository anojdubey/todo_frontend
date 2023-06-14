import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './MyCopm/todo/todo.component';
import { AboutComponent } from './MyCopm/about/about.component';

const routes: Routes = [
  { path: "", component: TodoComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
