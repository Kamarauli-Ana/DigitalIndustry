import { Injectable } from '@angular/core';
import { TodoList } from 'src/app/Models/Todo/todo.list.model';
import { Todo } from 'src/app/Models/Todo/todo.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private _jsonURL = 'http://localhost:3000/';

    constructor(private http: HttpClient) {
    }

    async GetTodoList(): Promise<TodoList> {
        let todoList = new TodoList();
        this.http.get(this._jsonURL + "todos").toPromise().then(
            (res: any) => {
                todoList.Todos = res as Todo[];
                todoList.TotalCount = todoList.Todos.length;
            },
            err => {
                console.log(err);
            }
        );
        return todoList;
    }

    async GetTodoListItem(guid: string): Promise<Todo> {
        let todo = new Todo();
        this.http.get(this._jsonURL + "todos/" + guid).toPromise().then(
            (res: any) => {
                todo.id = res.id;
                todo.TaskDate = res.TaskDate;
                todo.UserName = res.UserName;
                todo.Status = res.Status;
                todo.Project = res.Project;
                todo.Executer = res.Executer;
            },
            err => {
                console.log(err);
            }
        );
        return todo;
    }

    async AddTodoItem(todo: Todo) {
        this.http.post(this._jsonURL + "todos", todo).toPromise().then(
            (res: any) => {
                console.log(res);
            },
            err => {
                console.log(err);
            }
        );
    }

    async DeleteTodoItem(Id: string) {
        this.http.delete(this._jsonURL + "todos/" + Id).toPromise().then(
            (res: any) => {
                console.log(res);
            },
            err => {
                console.log(err);
            }
        );
    }

    async UpdateTodoItem(todo: Todo) {
        this.http.put(this._jsonURL + "todos/" + todo.id, todo).toPromise().then(
            (res: any) => {
                console.log(res);
            },
            err => {
                console.log(err);
            }
        );
    }
}