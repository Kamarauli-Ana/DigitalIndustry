import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './Components/Todo/List/todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddTodoItemComponent } from './Components/Todo/Add/add-todo-item/add-todo-item.component';
import { EditTodoItemComponent } from './Components/Todo/Edit/edit-todo-item/edit-todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddTodoItemComponent,
    EditTodoItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
