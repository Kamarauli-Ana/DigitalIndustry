import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/Todo/todo.model';
import { TodoService } from 'src/app/Services/Todo/todo.service';
import { Guid } from 'guid-typescript';
import { Router } from "@angular/router"
import { Statuses } from 'src/app/Models/Todo/todo.status.eunm';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css']
})
export class AddTodoItemComponent implements OnInit {
  TodoItem: Todo;
  TaskStatuses: Array<string>;
  StatusIsInvalid: boolean = true;

  constructor(
    private service: TodoService,
    private router: Router) {
  }

  ngOnInit() {
    this.TaskStatuses = Object.keys(Statuses).map(key => Statuses[key]).filter(k => !(parseInt(k) >= 0));
    this.TodoItem = new Todo();
    this.TodoItem.id = Guid.create().toString();
  }

  async onSaveItem() {
    await this.service.AddTodoItem(this.TodoItem);
    this.router.navigate(['/'])
  }

  async onStatusChange() {
    this.StatusIsInvalid = false;
  }

}
