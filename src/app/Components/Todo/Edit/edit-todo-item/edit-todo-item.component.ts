import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/Models/Todo/todo.model';
import { Statuses } from 'src/app/Models/Todo/todo.status.eunm';
import { TodoService } from 'src/app/Services/Todo/todo.service';

@Component({
  selector: 'app-edit-todo-item',
  templateUrl: './edit-todo-item.component.html',
  styleUrls: ['./edit-todo-item.component.css']
})
export class EditTodoItemComponent implements OnInit {
  TodoItem: Todo;
  TaskStatuses: Array<string>;

  constructor(
    private service: TodoService,
    private router: Router,
    private route: ActivatedRoute) {
    this.TodoItem = new Todo();
  }

  async ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.router.navigate(['/'])
    }
    this.TaskStatuses = Object.keys(Statuses).map(key => Statuses[key]).filter(k => !(parseInt(k) >= 0));
    await this.onGetTodoItem(id);
    console.log(this.TodoItem);
  }

  async onSaveItem() {
    await this.service.UpdateTodoItem(this.TodoItem);
    this.router.navigate(['/'])
  }

  async onGetTodoItem(id: string) {
    this.TodoItem = await this.service.GetTodoListItem(id);
  }


}
