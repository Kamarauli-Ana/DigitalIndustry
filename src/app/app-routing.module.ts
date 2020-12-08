import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTodoItemComponent } from './Components/Todo/Add/add-todo-item/add-todo-item.component';
import { EditTodoItemComponent } from './Components/Todo/Edit/edit-todo-item/edit-todo-item.component';
import { TodoListComponent } from './Components/Todo/List/todo-list/todo-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/todolist',
    pathMatch: 'full'
  },
  {
    path: 'todolist',
    component: TodoListComponent
  },
  {
    path: 'addtodoitem',
    component: AddTodoItemComponent
  },
  {
    path: 'edittodoitem/:id',
    component: EditTodoItemComponent
  },
  {
    path: '**',
    redirectTo: '/todolist'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
