import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './MyCopm/todo/todo.component';
import { TodoItemComponent } from './MyCopm/todo-item/todo-item.component';
import { AddTodoComponent } from './MyCopm/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './MyCopm/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { MyModalComponent } from './MyCopm/edit-modal/edit-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent,
    MyModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
