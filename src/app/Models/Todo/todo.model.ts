import { Statuses } from './todo.status.eunm';

export class Todo {
    id: string;
    TaskDate: Date;
    UserName: string;
    Project: string;
    Executer: string;
    Status: Statuses;
}