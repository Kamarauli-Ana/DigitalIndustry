import { Component, OnInit } from '@angular/core';
import { TodoList } from 'src/app/Models/Todo/todo.list.model';
import { Todo } from 'src/app/Models/Todo/todo.model';
import { TodoService } from 'src/app/Services/Todo/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  TodoList: TodoList;

  constructor(
    private service: TodoService
  ) {
    this.TodoList = new TodoList();
    this.TodoList.Todos = new Array<Todo>();
  }

  async ngOnInit() {
    setTimeout(async () => {
      await this.onGetTodoList();
    }, 500);
  }

  async onGetTodoList() {
    this.TodoList = await this.service.GetTodoList();
  }

  async onDeleteTodoListItem(guid: string) {
    if (confirm("ნამდვილად გსურთ წაშლა?") == true) {
      await this.service.DeleteTodoItem(guid);
      setTimeout(async () => {
        await this.onGetTodoList();
      }, 500);
    }
  }

}
